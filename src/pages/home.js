import { Container } from '../containers';
import { Carousel } from 'react-bootstrap';

import card from '/src/_assets/css/modules/cards.module.css';
import layout from '/src/_assets/css/modules/layout.module.css';

import { Fragment } from 'react';
import Link from 'next/link';

export const Home = () => (
    <Fragment>
        <Carousel>
            <Carousel.Item>
                <div className={`${layout.slider_image}`} style={{ backgroundImage: 'url(/image/slider/slider-01.jpg)' }}/>
                <Carousel.Caption style={{
                bottom: '6.25rem'
                }}>
                <h2>Seu médico até você</h2>
                <p>Localize o profissional mais próximo de você.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className={`${layout.slider_image}`} style={{ backgroundImage: 'url(/image/slider/slider-03.jpg)' }}/>
                <Carousel.Caption style={{
                bottom: '6.25rem'
                }}>
                <h2>Quiropraxia</h2>
                <p>Realize sua consulta sem sair de casa.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
            
        <div className={`${layout.ahead_content}`}>

            <Container> 
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className={`${card.box}`}>
                    <div className={`${card.text}`}>
                    <h2>Encontre qualquer profissional agora mesmo</h2>
                    <p>Busque por categorias de especialistas que melhor te atenda, e que esteja bem próximo de você!</p>
                    <Link href={'/buscar'}>
                        <button className={`btn ${card.button}`}>Encontrar profissional por perto</button>
                    </Link>
                    </div>
                </div>
                </div>
            </Container>

            <Container> 
                <div className="row w-100 m-0">

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className={`${card.box} ${card.paddingLeft_half}`}>
                    <div className={`${card.text}`}>
                        <h2>Crie sua conta e começe atender seus pacientes</h2>
                        <p>Junte-se ao nosso app para começar a atender home-care. Você faz sua renda!</p>
                        <button className={`btn ${card.button}`}>Criar minha conta e iniciar</button>
                    </div>
                    </div>
                </div>
                
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className={`${card.box} ${card.paddingLeft_half} ${card.box_light}`}>
                    <div className={`${card.text}`}>
                        <h2>Envie seu feedback de melhorias sobre o app</h2>
                        <p>Nós queremos que você nos diga o que está pensando que poderia ser útil para você</p>
                        <button className={`btn ${card.button}`}>Saiba mais</button>
                    </div>
                    </div>
                </div>

                </div>
            </Container>

            <Container>
                <div className="row col-xs-12 col-sm-12 col-md-12 col-lg-12 m-0">

                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <div className={`${card.box_link}`} style={{
                        background: 'url(/image/home/nossos-especialistas.jpg)'
                    }}>
                        <div className={`${card.box_link_title}`}>
                        <p>Nossos especialistas</p>
                        </div>
                        <div className={`${card.box_link_arrow}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="16" viewBox="0 0 36 22">
                            <path fill="#FFF" fillRule="evenodd" d="M24.926 0l-2.768 2.75 6.348 6.305H0v3.89h28.506l-6.348 6.304L24.926 22l8.306-8.25L36 11l-2.767-2.75z"></path>
                            </svg>
                        </div>
                    </div>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <div className={`${card.box_link}`} style={{
                        background: 'url(/image/home/junte-se.jpg)'
                    }}>
                        <div className={`${card.box_link_title}`}>
                        <p>Junte-se a nós</p>
                        </div>
                        <div className={`${card.box_link_arrow}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="16" viewBox="0 0 36 22">
                            <path fill="#FFF" fillRule="evenodd" d="M24.926 0l-2.768 2.75 6.348 6.305H0v3.89h28.506l-6.348 6.304L24.926 22l8.306-8.25L36 11l-2.767-2.75z"></path>
                            </svg>
                        </div>
                    </div>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <div className={`${card.box_link}`} style={{
                        background: 'url(/image/home/entre-contato.jpg)'
                    }}>
                        <div className={`${card.box_link_title}`}>
                        <p>Entre em contato</p>
                        </div>
                        <div className={`${card.box_link_arrow}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="16" viewBox="0 0 36 22">
                            <path fill="#FFF" fillRule="evenodd" d="M24.926 0l-2.768 2.75 6.348 6.305H0v3.89h28.506l-6.348 6.304L24.926 22l8.306-8.25L36 11l-2.767-2.75z"></path>
                            </svg>
                        </div>
                    </div>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <div className={`${card.box_link}`} style={{
                        background: 'url(/image/home/encontre-especialista.jpg)'
                    }}>
                        <div className={`${card.box_link_title}`}>
                        <p>Encontre um especialista próximo</p>
                        </div>
                        <div className={`${card.box_link_arrow}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="16" viewBox="0 0 36 22">
                            <path fill="#FFF" fillRule="evenodd" d="M24.926 0l-2.768 2.75 6.348 6.305H0v3.89h28.506l-6.348 6.304L24.926 22l8.306-8.25L36 11l-2.767-2.75z"></path>
                            </svg>
                        </div>
                    </div>
                    </div>

                </div>
            </Container>
        </div>
    </Fragment>
)