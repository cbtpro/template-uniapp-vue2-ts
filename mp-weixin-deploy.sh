set -e

while read -r line
do
  if [[ $line =~ "version" ]]
  then
    declare a=${line##*:}
    declare b=${a#*\"}
    declare version=${b%\"*}
    break
  fi
done < package.json

echo $version

npm install

echo "开始编译..."

start1=$(date +%s)
npm run build:prod:mp-weixin
end1=$(date +%s)
take1=$(( end1 - start1 ))
echo "Compile Success：${take1}s"

echo "微信小程序上传..."
start2=$(date +%s)

npm install -g miniprogram-ci

# upload
miniprogram-ci \
  upload \
  --pp ./dist/build/mp-weixin \
  --pkp ./private.wx538a0e237761456a.key \
  --appid wx538a0e237761456a \
  --uv $version \
  --threads 1 \
  -r 1 \
  --enable-es6 true \
  --enable-es7 true \
  --enable-autoprefixwxss true \
  --enable-minify true \

end2=$(date +%s)
take2=$(( end2 - start2 ))

echo "Upload Success: ${take2}s"

take3=$(( end2 - start1 ))
echo "Total Time: ${take3}s"