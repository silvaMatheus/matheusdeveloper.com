import { useEffect, useState } from 'react';

interface DeviceBreakpoints {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
    ultrawide: boolean;
}

// Isso verifica se estamos em um ambiente de servidor ou navegador
const isBrowser: boolean = typeof window !== 'undefined';

const getDeviceConfig = (width: number): DeviceBreakpoints => ({
    mobile: width <= 640,
    tablet: width > 640 && width <= 768,
    desktop: width > 768 && width <= 1024,
    ultrawide: width > 1024,
});

const useDeviceBreakpoint = (): DeviceBreakpoints => {
    // Define um estado inicial com base na largura da janela, se estiver disponível
    const [breakpoint, setBreakpoint] = useState<DeviceBreakpoints>(
        isBrowser
            ? getDeviceConfig(window.innerWidth)
            : { mobile: false, tablet: false, desktop: false, ultrawide: false }
    );

    useEffect(() => {
        // Esta função ajusta os breakpoints baseando-se na largura da janela atual
        const updateBreakpoint = () => {
            if (isBrowser) {
                setBreakpoint(getDeviceConfig(window.innerWidth));
            }
        };

        // Adiciona o ouvinte de evento quando o componente é montado
        window.addEventListener('resize', updateBreakpoint);

        // Chama a função updateBreakpoint imediatamente para definir o valor inicial
        updateBreakpoint();

        // Limpa o ouvinte de evento quando o componente é desmontado
        return () => window.removeEventListener('resize', updateBreakpoint);
    }, []);

    return breakpoint;
};

export default useDeviceBreakpoint;
