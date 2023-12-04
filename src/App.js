import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function App() {
  const editorRef = useRef(null);
  const [content, setContent] = useState(
    "This is the initial content of the editor."
  );
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const onEditorChange = function (a, editor) {
    console.log(a);
    // setContent(a);
    // setText(editor.getContent({ format: "text" }));
    //console.log(editor);
  };
  return (
    <>
      <Editor
        onInit={(evt, editor) => editorRef.current = editor}
        tinymceScriptSrc='/tinymce/tinymce.min.js'
        initialValue={content}
        onEditorChange={onEditorChange}
        init={{
          height: 500,
          menubar: true,
          relative_urls: false,
          image_dimensions: false,
          inline_styles: true,
          table_default_attributes: {
            class: 'table table-bordered'
          },
          table_use_colgroups: true,
          table_style_by_css: false,
          image_class_list: [{
            title: 'None',
            value: ''
          },
          {
            title: 'Fluid',
            value: 'img-fluid'
          },
          {
            title: 'Width 100%',
            value: 'w-100'
          },
          {
            title: 'Thumbnail',
            value: 'img-thumbnail'
          },
          {
            title: 'Rounded',
            value: 'rounded'
          },
          {
            title: 'Circle',
            value: 'rounded-circle '
          },
          {
            title: 'Fluid-Thumbnail',
            value: 'img-fluid img-thumbnail'
          },
          {
            title: 'Fluid-Circle',
            value: 'img-fluid rounded-circle'
          },
          {
            title: 'Fluid-Rounded',
            value: 'img-fluid rounded'
          },
          ],
          table_class_list: [{
            title: 'None',
            value: 'table'
          },
          {
            title: 'Table Striped',
            value: 'table table-striped'
          },
          {
            title: 'Table borders',
            value: 'table table-bordered'
          },
          {
            title: 'Table Striped Hover',
            value: 'table table-striped table-hover'
          },
          {
            title: 'Table borders Hover',
            value: 'table table-bordered table-hover'
          },
          {
            title: 'Acess table',
            value: 'acess-table-1'
          }

          ],
          external_plugins: {},
          theme: 'silver',
          schema: 'html5',
          noneditable_noneditable_class: 'fa',
          extended_valid_elements: 'span[class|style]',
          content_css: [
            '/bootstrap.min.css',
            'https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
            // assetUrl + 'frontend/assets/css/style.css'
          ],
          plugins: [
            "noneditable emoticons pagebreak",
            "advlist autolink autosave lists link image charmap print preview hr anchor pagebreak",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime media nonbreaking save table directionality vuetify2grid custombutton customvue",
            "emoticons template paste textpattern"
          ],
          toolbar: "bootstrap restoreraft insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent image media link | vuetify2grid custombutton customvue  emoticons",
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
          file_picker_callback: function (callback, value, meta) {

            if (meta.filetype === 'image') {

              var input = document.createElement('input');
              input.setAttribute('type', 'file');
              input.setAttribute('accept', 'image/*');
              input.click();

              input.onchange = () => {
                var file = input.files[0];
                var reader = new FileReader();

                reader.onload = (e) => {
                  var img = new Image();
                  img.src = reader.result;

                  callback(e.target.result, {
                    alt: file.name
                  });
                };

                reader.readAsDataURL(file);
              };
            }

          },
        }}
      />
      <button onClick={log}>Log editor content</button>
    </>
  );
}