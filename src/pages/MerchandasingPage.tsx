import '@/css/merchandasing.css'
import BasePage from './BasePage';
import imgSpiderman from '@res/merchandasing/peluche-spiderman.jpeg'

function MerchandasingPage() {
    return (
        <BasePage>
            <section className="ventas-merchandasing">
                <article className="item-merchandasing">
                    <a href="../pages/notImplemented.html"></a>
                    <div className="img-item-merchandasing">
                        <img src={imgSpiderman} alt=""/>
                    </div>
                    <div className="info-item-merchandasing">
                        <h3>Peluche Spiderman</h3>
                        <div className="price-item-merchandasing">
                            <span>PVP</span>
                            <h4>29,99€</h4>
                        </div>
                    </div>
                </article>
            </section>
        </BasePage>
    )
}

export default MerchandasingPage;