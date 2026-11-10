const fs=require('fs');fs.rmSync('dist',{recursive:true,force:true});fs.mkdirSync('dist');
for(const f of ['index.html','manifest.json','icon-192.png','icon-512.png'])fs.copyFileSync('web/'+f,'dist/'+f);console.log('web files copied to dist');
