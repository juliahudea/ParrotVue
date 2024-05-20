proj_name=parrotemail
npm run build
ssh root@64.227.96.26 "rm -rf /root/$proj_name/public/*" && rsync -avr ./dist/* root@64.227.96.26:/root/$proj_name/public/
