import React from 'react';
import Navbar from '../../../NavBar/navbar';
import Footer from '../../Footer';
import D1 from '../../../../assets/Img/1.jpg';
import C1 from '../../../../assets/Img/cs2.jpg';
import C2 from '../../../../assets/Img/Lostsaga.jpeg';
import C3 from '../../../../assets/Img/Pointblank.jpg';
import C4 from '../../../../assets/Img/valorant.jpg';
import C5 from '../../../../assets/Img/codwf3.jpg';
import C6 from '../../../../assets/Img/overwatch2.jpg';
import C7 from '../../../../assets/Img/pubg.jpg';
import '../categori.css';

const Mmorpg = () => {
  return (
    <div style={{backgroundColor: '#1e1e2f'}}>
        <Navbar />

        <header>
            <a href="/lostsaga">
                <img src={D1} style={{ width: '1300px', marginTop: '60px', display: 'cover', height: '350px' }} alt="" />
            </a>
            <hr className='text-white'/>
        </header>
        <h2 className='text-white mt-2' style={{ marginLeft: '92px' }}>MMORPG GAMES</h2>
        
        {/* CARD CAROUSEL */}

        <div id="carouselExample" className="carousel slide mt-5">
            <div className="carousel-inner">
                <div className="carousel-item active">

                    {/* SLIDE 1 */}

                    <div className="row mx-auto">
                        <div className='col-2' style={{ marginLeft: '205px' }}>
                            <a href='/lostsaga' className='text-white text-decoration-none' >
                                <img src={C2} alt='' className='lofer'/>
                                <p className='teks'>Lost Saga Origin</p>
                                <p className='descr'>text here</p>
                            </a>
                        </div>
                        <div className='col-2'>
                            <a href='/pointblank' className='text-white text-decoration-none' >
                                <img src={C3} alt='' className='lofer'/>
                                <p className='teks'>Final Fantasy XI</p>
                                <p className='descr'>text here</p>
                            </a>
                        </div>
                        <div className='col-2'>
                            <a href='/apexlegend' className='text-white text-decoration-none' >
                                <img src={C4} alt='' className='lofer'/>
                                <p className='teks'>World of Warcraft</p>
                                <p className='descr'>text here</p>
                            </a>
                        </div>
                        <div className='col-2'>
                            <a href='/codmw3' className='text-white text-decoration-none' >
                                <img src={C5} alt='' className='lofer'/>
                                <p className='teks'>Lost Ark</p>
                                <p className='descr'>text here</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    
                    {/* SLIDE 2 */}

                    <div className="row mx-auto">
                            <div className='col-2' style={{ marginLeft: '230px' }}>
                                <a href='cs2' className='text-white text-decoration-none' >
                                    <img src={C1} alt='' className='lofer'/>
                                    <p className='teks'>The Lord of the Rings Online</p>
                                    <p className='descr'>text here</p>
                                </a>
                            </div>
                            <div className='col-2'>
                                <a href='/apexlegend' className='text-white text-decoration-none' >
                                    <img src={C6} alt='' className='lofer'/>
                                    <p className='teks'>Black Desert Online</p>
                                    <p className='descr'>text here</p>
                                </a>
                            </div>
                            <div className='col-2'>
                                <a href='/apexlegend' className='text-white text-decoration-none' >
                                    <img src={C7} alt='' className='lofer'/>
                                    <p className='teks'>EVE Online</p>
                                    <p className='descr'>text here</p>
                                </a>
                            </div>
                            {/* <div className='col-2'>
                                <a href='/apexlegend' className='text-white text-decoration-none' >
                                    <img src={D1} alt='' className='lofer'/>
                                    <p className='teks'>Apex Legend</p>
                                    <p className='descr'>text here</p>
                                </a>
                            </div> */}
                        </div>
                    </div>
                    
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

        <div className="container">
                <div className="row mt-5 mx-auto" style={{ border: '1px solid #27293d', backgroundColor: '#27293d', heigh: '100px', width: '1000px' }}>
                    <div className="row">
                        <div className="col-2">
                            <div className='text-white'>
                                <img src={C2} alt="" style={{ width: '150px', marginTop: '10px', height: '110px'}} />
                                
                            </div>
                        </div>
                        <div className="col-8 text-white ms-3">
                            <span style={{ fontSize: '20px' }}>LOST SAGA ORIGIN</span>
                            <p style={{ fontSize: '11px' }}>
                                <a href="#" className='text-decoration-none'>F2P </a> 
                                <a href="" className='text-decoration-none'>FPS </a> 
                                <a href="" className='text-decoration-none'>BATTLE ROYALE </a> 
                                <a href="" className='text-decoration-none' >SHOOTER</a>
                            </p>
                            <p style={{ fontSize: '13px', marginTop: '-12px' }}>4 NOV 2020</p>
                            <p style={{ fontSize: '12px', marginTop: '30px' }}><span style={{ color: '#1BAA05' }}>POSITIFE</span> | 700.000++ Comment</p>
                        </div>
                        <div className="col">
                            <a href="/lostsaga" className='btn mt-5' style={{ backgroundColor: '#1BAA05', marginLeft: '47px' }}>CHECK</a>
                        </div>
                    </div>
                </div>
                <div className="row mt-2 mx-auto" style={{ border: '1px solid #27293d', backgroundColor: '#27293d', heigh: '100px', width: '1000px' }}>
                    <div className="row">
                        <div className="col-2">
                            <div className='text-white'>
                                <img src={C1} alt="" style={{ width: '150px', marginTop: '10px', height: '110px'}} />
                            </div>
                        </div>
                        <div className="col-8 text-white ms-3">
                            <span style={{ fontSize: '20px' }}>FINAL FANTASY XI</span>
                            <p style={{ fontSize: '11px' }}>
                                <a href="#" className='text-decoration-none'>F2P </a> 
                                <a href="" className='text-decoration-none'>FPS </a> 
                                <a href="" className='text-decoration-none'>BATTLE ROYALE </a> 
                                <a href="" className='text-decoration-none' >SHOOTER</a>
                            </p>
                            <p style={{ fontSize: '13px', marginTop: '-12px' }}>4 NOV 2020</p>
                            <p style={{ fontSize: '12px', marginTop: '30px' }}><span style={{ color: '#1BAA05' }}>POSITIFE</span> | 700.000++ Comment</p>
                        </div>
                        <div className="col">
                            <a href="" className='btn mt-5' style={{ backgroundColor: '#1BAA05', marginLeft: '47px' }}>CHECK</a>
                        </div>
                    </div>
                </div>
                <div className="row mt-2 mx-auto" style={{ border: '1px solid #27293d', backgroundColor: '#27293d', heigh: '100px', width: '1000px' }}>
                    <div className="row">
                        <div className="col-2">
                            <div className='text-white'>
                                <img src={C3} alt="" style={{ width: '150px', marginTop: '10px', height: '110px'}} />
                                
                            </div>
                        </div>
                        <div className="col-8 text-white ms-3">
                            <span style={{ fontSize: '20px' }}>WORLD OF WARCRAFT</span>
                            <p style={{ fontSize: '11px' }}>
                                <a href="#" className='text-decoration-none'>F2P </a> 
                                <a href="" className='text-decoration-none'>FPS </a> 
                                <a href="" className='text-decoration-none'>BATTLE ROYALE </a> 
                                <a href="" className='text-decoration-none' >SHOOTER</a>
                            </p>
                            <p style={{ fontSize: '13px', marginTop: '-12px' }}>4 NOV 2020</p>
                            <p style={{ fontSize: '12px', marginTop: '30px' }}><span style={{ color: '#1BAA05' }}>POSITIFE</span> | 700.000++ Comment</p>
                        </div>
                        <div className="col">
                            <a href="" className='btn mt-5' style={{ backgroundColor: '#1BAA05', marginLeft: '47px' }}>CHECK</a>
                        </div>
                    </div>
                </div>
                <div className="row mt-2 mx-auto" style={{ border: '1px solid #27293d', backgroundColor: '#27293d', heigh: '100px', width: '1000px' }}>
                    <div className="row">
                        <div className="col-2">
                            <div className='text-white'>
                                <img src={C4} alt="" style={{ width: '150px', marginTop: '10px', height: '110px'}} />
                                
                            </div>
                        </div>
                        <div className="col-8 text-white ms-3">
                            <span style={{ fontSize: '20px' }}>LOST ARK</span>
                            <p style={{ fontSize: '11px' }}>
                                <a href="#" className='text-decoration-none'>F2P </a> 
                                <a href="" className='text-decoration-none'>FPS </a> 
                                <a href="" className='text-decoration-none'>BATTLE ROYALE </a> 
                                <a href="" className='text-decoration-none' >SHOOTER</a>
                            </p>
                            <p style={{ fontSize: '13px', marginTop: '-12px' }}>4 NOV 2020</p>
                            <p style={{ fontSize: '12px', marginTop: '30px' }}><span style={{ color: '#1BAA05' }}>POSITIFE</span> | 700.000++ Comment</p>
                        </div>
                        <div className="col">
                            <a href="" className='btn mt-5' style={{ backgroundColor: '#1BAA05', marginLeft: '47px' }}>CHECK</a>
                        </div>
                    </div>
                </div>
                <div className="row mt-2 mx-auto" style={{ border: '1px solid #27293d', backgroundColor: '#27293d', heigh: '100px', width: '1000px' }}>
                    <div className="row">
                        <div className="col-2">
                            <div className='text-white'>
                                <img src={C5} alt="" style={{ width: '150px', marginTop: '10px', height: '110px'}} />
                                
                            </div>
                        </div>
                        <div className="col-8 text-white ms-3">
                            <span style={{ fontSize: '20px' }}>THE LORD OF THE RINGS ONLINE</span>
                            <p style={{ fontSize: '11px' }}>
                                <a href="#" className='text-decoration-none'>F2P </a> 
                                <a href="" className='text-decoration-none'>FPS </a> 
                                <a href="" className='text-decoration-none'>BATTLE ROYALE </a> 
                                <a href="" className='text-decoration-none' >SHOOTER</a>
                            </p>
                            <p style={{ fontSize: '13px', marginTop: '-12px' }}>4 NOV 2020</p>
                            <p style={{ fontSize: '12px', marginTop: '30px' }}><span style={{ color: '#1BAA05' }}>POSITIFE</span> | 700.000++ Comment</p>
                        </div>
                        <div className="col">
                            <a href="" className='btn mt-5' style={{ backgroundColor: '#1BAA05', marginLeft: '47px' }}>CHECK</a>
                        </div>
                    </div>
                </div>
                <div className="row mt-2 mx-auto" style={{ border: '1px solid #27293d', backgroundColor: '#27293d', heigh: '100px', width: '1000px' }}>
                    <div className="row">
                        <div className="col-2">
                            <div className='text-white'>
                                <img src={C6} alt="" style={{ width: '150px', marginTop: '10px', height: '110px'}} />
                                
                            </div>
                        </div>
                        <div className="col-8 text-white ms-3">
                            <span style={{ fontSize: '20px' }}>BLACK DESERT ONLINE</span>
                            <p style={{ fontSize: '11px' }}>
                                <a href="#" className='text-decoration-none'>F2P </a> 
                                <a href="" className='text-decoration-none'>FPS </a> 
                                <a href="" className='text-decoration-none'>BATTLE ROYALE </a> 
                                <a href="" className='text-decoration-none' >SHOOTER</a>
                            </p>
                            <p style={{ fontSize: '13px', marginTop: '-12px' }}>4 NOV 2020</p>
                            <p style={{ fontSize: '12px', marginTop: '30px' }}><span style={{ color: '#1BAA05' }}>POSITIFE</span> | 700.000++ Comment</p>
                        </div>
                        <div className="col">
                            <a href="" className='btn mt-5' style={{ backgroundColor: '#1BAA05', marginLeft: '47px' }}>CHECK</a>
                        </div>
                    </div>
                </div>
                <div className="row mt-2 mx-auto" style={{ border: '1px solid #27293d', backgroundColor: '#27293d', heigh: '100px', width: '1000px' }}>
                    <div className="row">
                        <div className="col-2">
                            <div className='text-white'>
                                <img src={C7} alt="" style={{ width: '150px', marginTop: '10px', height: '110px'}} />
                                
                            </div>
                        </div>
                        <div className="col-8 text-white ms-3">
                            <span style={{ fontSize: '20px' }}>EVE ONLINE</span>
                            <p style={{ fontSize: '11px' }}>
                                <a href="#" className='text-decoration-none'>F2P </a> 
                                <a href="" className='text-decoration-none'>FPS </a> 
                                <a href="" className='text-decoration-none'>BATTLE ROYALE </a> 
                                <a href="" className='text-decoration-none' >SHOOTER</a>
                            </p>
                            <p style={{ fontSize: '13px', marginTop: '-12px' }}>4 NOV 2020</p>
                            <p style={{ fontSize: '12px', marginTop: '30px' }}><span style={{ color: '#1BAA05' }}>POSITIFE</span> | 700.000++ Comment</p>
                        </div>
                        <div className="col">
                            <a href="" className='btn mt-5' style={{ backgroundColor: '#1BAA05', marginLeft: '47px' }}>CHECK</a>
                        </div>
                    </div>
                </div>
        </div>

        <Footer />
    </div>
  )
}

export default Mmorpg