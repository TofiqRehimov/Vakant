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
                  <option >Ağdam</option>
                  <option >Ağdaş</option>
                  <option >Ağstafa</option>
                  <option >Ağsu</option>
                  <option >Astara</option>
                  <option >Babək</option>
                  <option >Bakı</option>
                  <option >Balakən</option>
                  <option >Beyləqan</option>
                  <option >Biləsuvar</option>
                  <option >Bərdə</option>
                  <option >Culfa</option>
                  <option >Cəbrayıl</option>
                  <option >Cəlilabad</option>
                  <option >Daşkəsən</option>
                  <option >Dəvəçi</option>
                  <option >Füzuli</option>
                  <option >Goranboy</option>
                  <option >Göyçay</option>
                  <option >Göygöl</option>
                  <option >Gədəbəy</option>
                  <option >Gəncə</option>
                  <option >Hacıqabul</option>
                  <option >Hacıvar</option>
                  <option >Heydərabad</option>
                  <option >İmişli</option>
                  <option >İsmayıllı</option>
                  <option >Kürdəmir</option>
                  <option >Kəlbəcər</option>
                  <option >Laçın</option>
                  <option >Lerik</option>
                  <option >Lənkəran</option>
                  <option >Masallı</option>
                  <option >Mingəçevir</option>
                  <option >Naftalan</option>
                  <option >Naxçıvan</option>
                  <option >Neftçala</option>
                  <option >Oğuz</option>
                  <option >Ordubad</option>
                  <option >Qax</option>
                  <option >Qazax</option>
                  <option >Qıvraq</option>
                  <option >Qobustan</option>
                  <option >Quba</option>
                  <option >Qubadlı</option>
                  <option >Qusar</option>
                  <option >Qəbələ</option>
                  <option >Saatlı</option>
                  <option >Sabirabad</option>
                  <option >Şahbuz</option>
                  <option >Salyan</option>
                  <option >Samux</option>
                  <option >Şirvan</option>
                  <option >Siyəzən</option>
                  <option >Sumqayıt</option>
                  <option >Şuşa</option>
                  <option >Şəki</option>
                  <option >Şəmkir</option>
                  <option >Şərur</option>
                  <option >Tovuz</option>
                  <option >Tərtər</option>
                  <option >Ucar</option>
                  <option >Xaçmaz</option>
                  <option >Xırdalan</option>
                  <option >Xızı</option>
                  <option >Xocalı</option>
                  <option >Xocavənd</option>
                  <option >Yardımlı</option>
                  <option >Yevlax</option>
                  <option >Zaqatala</option>
                  <option >Zəngilan</option>
                  <option >Zərdab</option>
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