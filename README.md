# React_Student_Data_Interface

To run the actual webapp, there are two steps:
1. Run the fileOpener.js file in a terminal using the command node fileOpener.js
The output should then say the program is watching on port 3000 or whatever port.
2. Go to "localhost:3000" and the webapp will show. 

The original javaScript source code files are in the javaScript_source_files folder. These
are the original .jsx react files that all the code was written in. These files were
then converted into .js files using babel. These .js files reside in the javaScript folder.
The webapp should run without any use of babel on your end but the original files .jsx are visible
for viewing.

If you wish to use babel to convert the .jsx files from javaScript_source_files into the .js files
in the javaScript folder to prove that the .jsx files really are the source code, you will need to run one command:
npx babel --watch javaScript_source_files --out-dir javaScript
This command will run babel and convert the .jsx files to .js files.
