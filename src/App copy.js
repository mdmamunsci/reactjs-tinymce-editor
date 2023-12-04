import logo from './logo.svg';
import './App.css';
import React from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import { Editor } from '@ckeditor/ckeditor5-core';


function uploadPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    // return uploadAdapter(loader);
    console.log(loader);
    return;
  };
}

function App() {
  return (
    <div className="App">
      <h2>Using CKEditor&nbsp;5 build in React</h2>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor&nbsp;5!</p>"
        onReady={editor => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
      />
    </div>
  );
}

export default App;


// import React from 'react';
// import { CKEditor } from 'ckeditor4-react';

// const API_URL = "https://77em4-8080.sse.codesandbox.io";
// const UPLOAD_ENDPOINT = "upload_files";


// function App() {
//   function uploadAdapter(loader) {
//     return {
//       upload: () => {
//         return new Promise((resolve, reject) => {
//           const body = new FormData();
//           loader.file.then((file) => {
//             body.append("files", file);
//             // let headers = new Headers();
//             // headers.append("Origin", "http://localhost:3000");
//             fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
//               method: "post",
//               body: body
//               // mode: "no-cors"
//             })
//               .then((res) => res.json())
//               .then((res) => {
//                 resolve({
//                   default: `${API_URL}/${res.filename}`
//                 });
//               })
//               .catch((err) => {
//                 reject(err);
//               });
//           });
//         });
//       }
//     };
//   }
//   function uploadPlugin(editor) {
//     editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
//       return uploadAdapter(loader);
//     };
//   }
//   return (
//     <div className="App">
//       <CKEditor
//         // config={{
//         //   // extraPlugins: [uploadPlugin],
//         //   //   plugins: [Essentials, Bold, Italic, Paragraph ],
//         //   //   toolbar: {
//         //   //     items: [
//         //   //       'undo', 'redo',
//         //   //       '|', 'heading',
//         //   //       '|', 'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
//         //   //       '|', 'bold', 'italic', 'strikethrough', 'subscript', 'superscript', 'code',
//         //   //       '|', 'link', 'uploadImage', 'blockQuote', 'codeBlock',
//         //   //       '|', 'alignment',
//         //   //       '|', 'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent'
//         //   //     ],
//         //   //     shouldNotGroupWhenFull: true
//         //   //   }
//         // }}
//         config={{
//           // extraPlugins: [uploadPlugin],
//           // toolbar: [
//           //   ['Source'],
//           //   ['Styles', 'Format', 'Font', 'FontSize'],
//           //   ['Bold', 'Italic'],
//           //   ['Undo', 'Redo'],
//           //   ['EasyImageUpload'],
//           //   ['About']
//           // ],
//           // extraPlugins: 'easyimage',
//           // removePlugins: 'image',
//           // cloudServices_uploadUrl: 'https://33333.cke-cs.com/easyimage/upload/',
//           // cloudServices_tokenUrl:
//           //   'https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt'
//         }}
//         debug={true}
//         onReady={(editor) => { }}
//         onBlur={(event, editor) => { }}
//         onFocus={(event, editor) => { }}
//         onChange={(event, editor) => {
//           // handleChange(editor.getData());
//         }}
//         // editorUrl='https://cdn.ckeditor.com/4.6.2/standard/ckeditor.js'
//         // editorUrl='https://cdn.ckeditor.com/4.22.1/standard/ckeditor.js'
//         editorUrl='https://cdn.ckeditor.com/4.23.0-lts/standard-all/ckeditor.js'
//       // eslint-disable-next-line no-undef
//       // {...props}
//       />
//     </div>
//   );
// }

// export default App;