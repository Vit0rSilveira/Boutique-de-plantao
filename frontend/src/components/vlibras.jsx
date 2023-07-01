import React, { useEffect } from 'react';

function VLibrasWrapper({ children }) { // Adicione a propriedade "children" como parâmetro
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            {/* Elementos do VLibras */}
            <button className="vlibras-btn">Acessibilidade</button>

            {/* Componentes filhos */}
            {children} {/* Use a propriedade "children" aqui */}
        </div>
    );
}

export default VLibrasWrapper;
