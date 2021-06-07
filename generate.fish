#!/usr/local/bin/fish

function genheaders -a FILE
  cat file_head.html $FILE file_tail.html
end

genheaders index_source.html > index.html 
genheaders publications_source.html > publications.html
genheaders cv_source.html > cv.html 
genheaders projects_source.html > projects.html 
genheaders slides_source.html > slides.html 
