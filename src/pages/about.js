import Image from "next/image";
import React from "react";

const about = () => {
    return (
        <div className="p-4" relative bg-cover bg-center h-screen style={{ backgroundImage: "url('/backg2.jpg')" }}>
            <Image
                width={500}
                height={100}
                alt="Sneakers Concept"
                src={"/logobranco.png"}
            />
            <section className="mx-auto max-w-[700px] text-white text-xl">
                <p className="mt-2 mb-6">
                    <b>Sneakers Concept</b> é uma loja de calçado especializada em sapatilhas, localizada no encantador bairro de Aldoar, no Porto, Portugal. A nossa paixão pelas sapatilhas vai além do simples calçado; é uma verdadeira cultura que celebramos e partilhamos com a nossa comunidade.
                </p>
                <p className="mb-6">
                    Na nossa loja, irá encontrar uma seleção cuidada das melhores marcas e modelos de sapatilhas de todo o mundo. Desde os clássicos intemporais até às últimas novidades da moda, temos tudo o que necessita para expressar o seu estilo único e autêntico.
                </p>
                <p className="mb-6">
                    A nossa equipa apaixonada está sempre pronta para o ajudar a encontrar o par perfeito de sapatilhas que se ajuste não apenas ao seu estilo, mas também ao seu conforto e desempenho. Valorizamos a qualidade, o conforto e o estilo, e acreditamos que cada pessoa merece calçado que os faça sentir confiantes e inspirados.
                </p>
                <p className="mb-6">
                    Além da nossa loja física em Aldoar, também oferecemos uma experiência de compra online conveniente, para que possa explorar a nossa coleção e fazer as suas compras a qualquer hora e em qualquer lugar.
                </p>
                <p className="mb-6">
                    Na Sneakers Concept, estamos comprometidos em fornecer não apenas os melhores produtos, mas também um serviço excepcional. Estamos aqui para tornar a sua experiência de compra de sapatilhas verdadeiramente memorável e satisfatória.
                </p>
                <h3 className="underline font-semibold my-6">Missão</h3>
                <p className="mb-6">
                    A nossa missão na Sneakers Concept é simples: oferecer a melhor seleção de sapatilhas de qualidade, combinada com um serviço excepcional, para que os nossos clientes possam encontrar calçado que os inspire e os capacite a alcançar os seus objetivos, seja na moda, no desporto ou na vida quotidiana.
                </p>
            </section>
            
        </div>
        
    );
};

export default about;
