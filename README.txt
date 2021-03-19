The original javaScript source code files are in the javaScript_source_files folder. These
are the original .jsx react files that all the code was written in. These files were
then converted into .js files using babel. These .js files reside in the javaScript folder.
The webapp should run without any use of babel on your end but the original files .jsx are visible
for viewing.

P.S. the original .jsx files were in the first submission I made in the javaScript folder
so I am not sure why I got an email saying I submitted the build folder without source code. 
The .jsx files that were included are the original files I used for development and are not
built from any other files.

If you wish to use babel to convert the .jsx files from javaScript_source_files into the .js files
in the javaScript folder to prove that the .jsx files really are the source code, you will need to run a couple commands:
npm i @babel/cli
npm i @babel/core
npm i @babel/preset-react
These commands download the libraries necessary to run babel the way I did.
npx babel --watch javaScript_source_files --out-dir javaScript
This final command will run babel and convert the .jsx files to .js files.
 