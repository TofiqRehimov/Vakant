import React, { useRef,useState,useEffect } from 'react';
import { MDBBtn, MDBCheckbox, MDBInput } from 'mdb-react-ui-kit';
import { Editor } from '@tinymce/tinymce-react';
import "./Advertisemets.scss";


const Advertisements = () => {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

    return (
        <div className='container'>
            <div className='col-md-12 mt-2'>
                <form>
                    <div className='row '>
                        <div className='col-md-3 mt-3 mb-3'>
                            <div className="form-group">
                                <label htmlFor="exampleSelect">Vezife</label>
                                <MDBInput label='Vezife qeyd edin' id='form1' type='text' />
                            </div>
                        </div>
                        <div className='col-md-3 mt-3 mb-3'>
                            <div className="form-group">
                                <label htmlFor="exampleSelect">Kateqoriya secin</label>
                                <select className="form-control" id="exampleSelect">
                                    <option>Maliyye</option>
                                    <option>Marketing</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-md-3 mt-3 mb-3'>
                            <div className="form-group">
                                <label htmlFor="exampleSelect">Is rejimi</label>
                                <select className="form-control" id="exampleSelect">
                                    <option>Tam stat </option>
                                    <option> Frilans </option>
                                    <option> Part - time </option>
                                    <option> Tecrubeci </option>


                                </select>
                            </div>
                        </div>
                        <div className='col-md-3 mt-3 mb-3'>
                            <div className="form-group">
                                <label htmlFor="exampleSelect"> Tecrube</label>
                                <select className="form-control" id="exampleSelect">
                                    <option> 1 - ilden az  </option>
                                    <option> 1 ilden 3 ile qeder</option>
                                    <option> 3 ilden 5 ile qeder</option>
                                    <option> 5 ilden yuxari</option>


                                </select>
                            </div>
                        </div>
                        <div className='col-md-3 mt-3 mb-3'>
                            <div className="form-group">
                                <label htmlFor="exampleSelect"> Seher </label>
                                <select className="form-control" id="exampleSelect">
                                    <option> Baki  </option>
                                    <option> Sumqayit </option>
                                </select>
                            </div>
                        </div>
                        <div className='col-md-3 mt-3 mb-3'>
                            <div className="form-group">
                                <label htmlFor="exampleSelect"> Yas </label>
                                <select className="form-control" id="exampleSelect">
                                    <option> 18  </option>
                                    <option> 20 </option>
                                </select>
                            </div>
                        </div>
                        <div className='col-md-3 mt-3 mb-3'>
                            <div className="form-group">
                                <label htmlFor="exampleSelect"> Maas </label>
                                <select className="form-control" id="exampleSelect">
                                    <option> 200  </option>
                                    <option> 300 </option>
                                </select>
                            </div>
                        </div>
                        <div className='col-md-3 mt-3 mb-3'>
                            <div className="form-group">
                                <label htmlFor="exampleSelect"> Tehsil </label>
                                <select className="form-control" id="exampleSelect">
                                    <option> Orta  </option>
                                    <option> Ali </option>
                                </select>
                            </div>
                        </div>
                        <div className='col-md-3 mt-3 mb-3'>
                            <div className="form-group">
                                <label htmlFor="exampleSelect">Mail</label>
                                <MDBInput label='Mail daxil edin' id='form1' type='mail' />
                            </div>
                        </div>
                        <div className='col-md-3 mt-3 mb-3'>
                            <div className="form-group">
                                <label htmlFor="exampleSelect">Telefon</label>
                                <MDBInput label='Telefin daxil edin' id='form1' type='text' />
                            </div>
                        </div>
                        <div className='col-md-3 mt-3 mb-3'>
                            <div className="form-group">
                                <label htmlFor="exampleSelect"> Paket secin </label>
                                <select className="form-control" id="exampleSelect">
                                    <option> Standart  </option>
                                    <option> Preimium </option>
                                </select>
                            </div>
                        </div>
                        <div className='col-md-3 mt-3 mb-3'>
                            <div className="form-group">
                                <label htmlFor="exampleSelect"> Sirket secin </label>
                                <select className="form-control" id="exampleSelect">
                                    <option> Yoxdur  </option>
                                    <option>Preimum  </option>
                                    <option> PreBrent </option>
                                </select>
                            </div>
                        </div>
                       <div className='col-md-12 mt-3 mb-3'>
                       <label htmlFor="exampleSelect"> Is haqqinda meumat. </label>
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
                       <label htmlFor="exampleSelect">Telebler</label>
                       <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            initialValue=""
                            
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
                         {/* <pre>{text}</pre> */}
                        {/* <button onClick={log}>Log editor content</button> */}
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

export default Advertisements;