import React from 'react';
import { MdAccountCircle } from "react-icons/md";
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardHeader, MDBTypography } from 'mdb-react-ui-kit';
import Cards from '../Cards/Cards';
const Vacant = () => {
    return (
        <div className='col-md-12 mt-4'>
            <div className='container'>
            <MDBCard shadow='0' border='light' background='white' className='mb-3' >
                <MDBCardHeader>
                    <div className='row'>
                        <div className='col-md-4 justify-content-center'>
                            <MdAccountCircle fontSize={250} />
                        </div>
                        <div className='col-md-4'>
                            <p> Web Project Manager/Product Owner is elani </p>
                            <p> Premium </p>
                            <p>1200-2000 AZN</p>
                            <p>Baslama tarixi: 15.01.2022</p>
                            <p>Bitme tarixi : 15.02.2022</p>
                            </div>
                        <div className='col-md-4'>
                            <p>Seher: Baki</p>
                            <p>Is rejimi:Tam stat</p>
                            <p>Sahe :Texnologiya (IT) </p>
                            <p>Kateqoriya: Proqramlasdirma</p>
                           
                        </div>
                    </div>


                </MDBCardHeader>
                <MDBCardBody>
                    <MDBCardTitle> İş barədə məlumat </MDBCardTitle>
                    <MDBCardText>
                        <ul>
                            <li>Qısa məlumat:</li>
                            <li>11 ildən çox fəaliyyət göstərən və bir çox yerli və beynəlxalq layihələr üzrə müxtəlif veb proyektləri icra edən, son illərdə SaaS və veb tətbiqləri üzrə ixtisaslaşan Prosper MMC-nin Proqram Təminatı komandası Məhsul Portfelinin İdarə olunması üzrə Menecer (Web Project Manager/Product Owner) üzrə ixtisaslaşmış təcrübəli və bacarıqlı menecer axtarışındadır. </li>
                            <li>Vəzifə: Web Project Manager/Product Owner</li>
                            <li>Əmək haqqı: Vakantın təcrübəsinə uyğun olaraq bonuslarla birgə 1200 – 2000 AZN</li>
                        </ul>
                    </MDBCardText>

                </MDBCardBody>
            </MDBCard>
            </div>
            <Cards/>
        </div>
    );
};

export default Vacant;