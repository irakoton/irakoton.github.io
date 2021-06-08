#!/usr/local/bin/fish

function genheaders -a FILE
  cat sources_html/file_head.html $FILE sources_html/file_tail.html
end

genheaders sources_html/index_source.html > index.html 
genheaders sources_html/publications_source.html > publications.html
genheaders sources_html/cv_source.html > cv.html 
genheaders sources_html/projects_source.html > projects.html 
genheaders sources_html/slides_source.html > slides.html 
