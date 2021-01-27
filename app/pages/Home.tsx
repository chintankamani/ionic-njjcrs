import { IonButton, IonCard, IonCardContent, IonContent, IonGrid, IonIcon, IonImg, IonPage, IonSearchbar, IonSlide, IonSlides, IonText } from '@ionic/react';
import { cartOutline } from 'ionicons/icons';
import React from 'react';
import './Home.scss';

const Tab1: React.FC = () => {

  const slideOpts = {
    initialSlide: 1,
    speed: 400,
    // space: 10,
  };

 const productData = [{
    src: '/assets/products/image 1.png',
    title: ' Moisturiser Olive & Almond 100ml',
    price: '238',
    discount: '30'
 },{
  src: '/assets/products/image 1.png',
  title: 'Smoothee Moisturiser  & Almond 100ml',
  price: '238',
  discount: '30'
},{
  src: '/assets/products/image 1.png',
  title: 'Smoothee Moisturiser Olive &  100ml',
  price: '238',
  discount: '30'
},{
  src: '/assets/products/image 1.png',
  title: 'Smoot Olive & Almond 100ml',
  price: '238',
  discount: '30'
},{
  src: '/assets/products/image 1.png',
  title: 'Smoot Almond 100ml',
  price: '238',
  discount: '30'
}];

  const carouselData = [{
    src: "/assets/Frame 18.png",
    alt: "cool",
    id: '12'
  },
  {
    src: "/assets/Frame 18.png",
    alt: "cowol",
    id: '1q2'
  }
];

const cartegoryData = [{
  src: "/assets/category/lipstick.svg",
  name: "Makeup",
  alt: "Makddeup"
},{
  src: "/assets/category/shampoo.svg",
  name: "Bath",
  alt: "Batsh"
},{
  src: "/assets/category/comb.svg",
  name: "Essentials",
  alt: "Cosasmb"
},{
  src: "/assets/category/lipstick.svg",
  name: "Makeup",
  alt: "Makaeup"
},{
  src: "/assets/category/shampoo.svg",
  name: "Bath",
  alt: "Bath"
},{
  src: "/assets/category/comb.svg",
  name: "Essentials",
  alt: "Coasasmb"
},{
  src: "/assets/category/lipstick.svg",
  name: "Makeup",
  alt: "Makeup"
},{
  src: "/assets/category/shampoo.svg",
  name: "Bath",
  alt: "Basasath"
},{
  src: "/assets/category/comb.svg",
  name: "Essentials",
  alt: "Coassssasmb"
}]

  return (
    <IonPage className="home-styles">
      <IonContent fullscreen className="container ion-padding">
            <IonGrid className="grid-section-spacing">
              <IonSearchbar mode="ios"  className="searchBar"/>

                {/* Stories */}
                <IonSlides pager={true} options={slideOpts} className="AdsCarousel">
                  {carouselData.map(slide =>
                      <IonSlide key={slide.alt}>
                        <div className="carouselImageContainer">
                          <img src={slide.src} alt={slide.alt} />
                        </div>
                      </IonSlide>)}
                </IonSlides>

                <section className="cos-section">
                    <IonText className="title">
                      Categories
                    </IonText>
                    <div className="categoriesContainer">
                      <div className="categories">
                        {cartegoryData.map(cat =>
                              <div className="categoryBox" key={cat.alt}>
                                  <img src={cat.src} alt={cat.alt} />
                                  <IonText>{cat.name}</IonText>
                              </div>
                          )}
                      </div>
                    </div>
                </section>


                <section className="cos-section">
                    <IonText className="title">
                      Best Sellers
                    </IonText>


                    <div className="productCard-container">
                    {productData.map(cat =>
                              <IonCard className="productCard">
                                  <IonButton className="cart"><IonIcon  icon={cartOutline} /></IonButton>
                                  <IonImg src={cat.src} alt={cat.title} />
                                  <IonCardContent className="body">
                                    <IonText className="title" >{cat.title}</IonText>
                                    <div className="meta-data">
                                        <div className="price">$ {cat.price}</div>
                                        {cat.discount ? <div className="discount">{cat.discount}% OFF</div> : ''}
                                    </div>
                                  </IonCardContent>
                              </IonCard>

                          )}
                    </div>

                </section>
            </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
