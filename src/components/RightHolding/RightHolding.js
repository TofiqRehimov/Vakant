import React, { useRef } from 'react';
import { MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Editor } from '@tinymce/tinymce-react';


const RightHolding = () => {

    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent())
        }
    }
    return (
        <div>
            <div className='col-md-12'>
                <form>
                    <div className='row justify-content-center'>
                        <div className='col-md-6 mt-3 mb-3'>
                            <div className="form-group">
                                <label htmlFor="exampleSelect">Sirket adi</label>
                                <MDBInput label='Sirket adi qeyd edin' id='form1' type='text' />
                            </div>
                        </div>
                        <div className='col-md-6 mt-3 mb-3'>
                            <div className="form-group">
                                <label htmlFor="exampleSelect">Sirket unvani</label>
                                <MDBInput label='Sirket unvani qeyd edin' id='form1' type='text' />
                            </div>
                        </div>
                        <div className='col-md-12 mt-3 mb-3'>
                            <label htmlFor="exampleSelect"> Sirket Haqqinda </label>
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                initialValue="<p></p>"
                                init={{
                                    height: 250,
                                    menubar: false,
                                    plugins: [
                                        'advlist autolink lists link image charmap print preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount'
                                    ],
                                    toolbar: 'undo redo | formatselect | ' +
                                        'bold italic backcolor | alignleft aligncenter ' +
                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                        'removeformat | help',
                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                }}
                            />
                            {/* <button onClick={log}>Log editor content</button> */}
                        </div>
                        <div className='col-md-12 mt-3 mb-3'>
                            <label htmlFor="exampleSelect">Logo yukle</label>
                            <MDBInput label='' id='form1' type='file' />
                        </div>
                        <div className='col-md-12'>
                            <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Sayta elan yerlesdirmek ucun qaydalari qebul edirem' />
                            <button className='btn btn-primary mt-3'> Gonder</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RightHolding;