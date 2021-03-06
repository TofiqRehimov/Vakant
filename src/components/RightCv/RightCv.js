import React, { useRef } from 'react'
import { MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Editor } from '@tinymce/tinymce-react';

function RightCv() {

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
          <div className='row'>
            <div className='col-md-3 mt-3 mb-3'>
              <div className="form-group">
                <label htmlFor="exampleSelect">Ad</label>
                <MDBInput label='Ad qeyd edin' id='form1' type='text' />
              </div>
            </div>
            <div className='col-md-3 mt-3 mb-3'>
              <div className="form-group">
                <label htmlFor="exampleSelect">Soyad</label>
                <MDBInput label='Soyad qeyd edin' id='form1' type='text' />
              </div>
            </div>
            <div className='col-md-3 mt-3 mb-3'>
              <div className="form-group">
                <label htmlFor="exampleSelect">Ata adi</label>
                <MDBInput label='Ata adi qeyd edin' id='form1' type='text' />
              </div>
            </div>
            <div className='col-md-3 mt-3 mb-3'>
              <div className="form-group">
                <label htmlFor="exampleSelect">Dogum ili</label>
                <MDBInput label='Dogum ili qeyd edin' id='form1' type='text' />
              </div>
            </div>
            <div className='col-md-3 mt-3 mb-3'>
              <div className="form-group">
                <label htmlFor="exampleSelect">Cins secin</label>
                <select className="form-control" id="exampleSelect">
                  <option>Kisi</option>
                  <option>Qadin</option>
                </select>
              </div>
            </div>
            <div className='col-md-3 mt-3 mb-3'>
              <div className="form-group">
                <label htmlFor="exampleSelect">Tehsil</label>
                <select className="form-control" id="exampleSelect">
                  <option>Orta</option>
                  <option>Ali</option>
                </select>
              </div>
            </div>
            <div className='col-md-3 mt-3 mb-3'>
              <div className="form-group">
                <label htmlFor="exampleSelect"> Vezife</label>
                <MDBInput label=' Vezife qeyd edin' id='form1' type='text' />
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
                <label htmlFor="exampleSelect">Seher</label>
                <select className="form-control" id="exampleSelect">
                  <option >A??dam</option>
                  <option >A??da??</option>
                  <option >A??stafa</option>
                  <option >A??su</option>
                  <option >Astara</option>
                  <option >Bab??k</option>
                  <option >Bak??</option>
                  <option >Balak??n</option>
                  <option >Beyl??qan</option>
                  <option >Bil??suvar</option>
                  <option >B??rd??</option>
                  <option >Culfa</option>
                  <option >C??bray??l</option>
                  <option >C??lilabad</option>
                  <option >Da??k??s??n</option>
                  <option >D??v????i</option>
                  <option >F??zuli</option>
                  <option >Goranboy</option>
                  <option >G??y??ay</option>
                  <option >G??yg??l</option>
                  <option >G??d??b??y</option>
                  <option >G??nc??</option>
                  <option >Hac??qabul</option>
                  <option >Hac??var</option>
                  <option >Heyd??rabad</option>
                  <option >??mi??li</option>
                  <option >??smay??ll??</option>
                  <option >K??rd??mir</option>
                  <option >K??lb??c??r</option>
                  <option >La????n</option>
                  <option >Lerik</option>
                  <option >L??nk??ran</option>
                  <option >Masall??</option>
                  <option >Ming????evir</option>
                  <option >Naftalan</option>
                  <option >Nax????van</option>
                  <option >Neft??ala</option>
                  <option >O??uz</option>
                  <option >Ordubad</option>
                  <option >Qax</option>
                  <option >Qazax</option>
                  <option >Q??vraq</option>
                  <option >Qobustan</option>
                  <option >Quba</option>
                  <option >Qubadl??</option>
                  <option >Qusar</option>
                  <option >Q??b??l??</option>
                  <option >Saatl??</option>
                  <option >Sabirabad</option>
                  <option >??ahbuz</option>
                  <option >Salyan</option>
                  <option >Samux</option>
                  <option >??irvan</option>
                  <option >Siy??z??n</option>
                  <option >Sumqay??t</option>
                  <option >??u??a</option>
                  <option >????ki</option>
                  <option >????mkir</option>
                  <option >????rur</option>
                  <option >Tovuz</option>
                  <option >T??rt??r</option>
                  <option >Ucar</option>
                  <option >Xa??maz</option>
                  <option >X??rdalan</option>
                  <option >X??z??</option>
                  <option >Xocal??</option>
                  <option >Xocav??nd</option>
                  <option >Yard??ml??</option>
                  <option >Yevlax</option>
                  <option >Zaqatala</option>
                  <option >Z??ngilan</option>
                  <option >Z??rdab</option>
                </select>
              </div>
            </div>

            <div className='col-md-3 mt-3 mb-3'>
              <div className="form-group">
                <label htmlFor="exampleSelect">Tecrube</label>
                <select className="form-control" id="exampleSelect">
                  <option>1 ilden az</option>
                  <option>1 ilden 3 ile qeder</option>
                </select>
              </div>
            </div>
            <div className='col-md-3 mt-3 mb-3'>
              <div className="form-group">
                <label htmlFor="exampleSelect">Is rejimi</label>
                <select className="form-control" id="exampleSelect">
                  <option>Tam stat</option>
                  <option>Frilans</option>
                </select>
              </div>
            </div>
            <div className='col-md-3 mt-3 mb-3'>
              <div className="form-group">
                <label htmlFor="exampleSelect">Telefon nomresi</label>
                <MDBInput label='Telefon nomresi qeyd edin' id='form1' type='text' />
              </div>
            </div>
            <div className='col-md-3 mt-3 mb-3'>
              <div className="form-group">
                <label htmlFor="exampleSelect">E-mail</label>
                <MDBInput label='E-mail qeyd edin' id='form1' type='mail' />
              </div>
            </div>
            <div className='col-md-3 mt-3 mb-3'>
              <div className="form-group">
                <label htmlFor="exampleSelect">Minimum emek haqqi</label>
                <MDBInput label='Minimum emek haqqi qeyd edin' id='form1' type='text' />
              </div>
            </div>
            <div className='col-md-12 mt-3 mb-3'>
              <label htmlFor="exampleSelect"> Tehsil haqqinda melumat. </label>
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
              <label htmlFor="exampleSelect"> Bacariqlar ve bilikler. </label>
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
              <label htmlFor="exampleSelect"> Is kecmisiniz. </label>
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
              <label htmlFor="exampleSelect">Sekil yukle</label>
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
  )
}

export default RightCv