'use client';

import { Variants, motion } from 'framer-motion';
import { useRef, useState } from 'react';

interface CustomBadgeProps {
    transform?: string;
}
const CustomBadge: React.FC<CustomBadgeProps> = () => {
    const [isHovered, setHovered] = useState(false);

    const scrollRef = useRef(null);

    const cardVariants: Variants = {
        initial: { y: 0 },
        animate: {
            y: [0, -20, 0],
            transition: {
                duration: 2.5,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop',
            },
        },
        hover: {
            scale: 1.05,
            transition: { duration: 0.2 },
        },
    };

    const shadowVariants: Variants = {
        initial: { scale: 1 },
        animate: {
            scale: [1, 1.05, 1],
            opacity: [0.6, 0.5, 0.6],
            transition: {
                duration: 2.5,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop',
            },
        },
        hover: {
            opacity: 0.3,
            transition: { duration: 0.2 },
        },
    };

    const handleCardClick = () => {
        console.log('Card clicado:');
        // Aqui você pode abrir um modal ou realizar outra ação
    };

    return (
        <>
            <motion.svg
                width="400%"
                height="400%"
                viewBox="800 1200 6000 2000"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g>
                    <line
                        y1="-0.851995"
                        x2="1723.67"
                        y2="-0.851995"
                        transform="matrix(-0.866026 0.5 -0.866025 -0.5 3158.44 961.688)"
                        stroke="#38384D"
                        strokeWidth="1.70399"
                    />
                    <line
                        y1="-0.851995"
                        x2="1723.67"
                        y2="-0.851995"
                        transform="matrix(-0.866026 0.5 -0.866025 -0.5 3030.88 888.043)"
                        stroke="#38384D"
                        strokeWidth="1.70399"
                    />
                    <line
                        y1="-0.851995"
                        x2="1895.85"
                        y2="-0.851995"
                        transform="matrix(0.866025 0.5 -0.866026 0.5 1524.03 9.4624)"
                        stroke="#38384D"
                        strokeWidth="1.70399"
                    />
                    <line
                        y1="-0.851995"
                        x2="1723.67"
                        y2="-0.851995"
                        transform="matrix(-0.866026 0.5 -0.866025 -0.5 2903.32 814.395)"
                        stroke="#38384D"
                        strokeWidth="1.70399"
                    />
                    <line
                        y1="-0.851995"
                        x2="1895.85"
                        y2="-0.851995"
                        transform="matrix(0.866025 0.5 -0.866026 0.5 1408.06 76.4194)"
                        stroke="#38384D"
                        strokeWidth="1.70399"
                    />
                    <line
                        y1="-0.851995"
                        x2="1723.67"
                        y2="-0.851995"
                        transform="matrix(-0.866026 0.5 -0.866025 -0.5 2775.77 740.753)"
                        stroke="#38384D"
                        strokeWidth="1.70399"
                    />
                    <line
                        y1="-0.851995"
                        x2="1895.85"
                        y2="-0.851995"
                        transform="matrix(0.866025 0.5 -0.866026 0.5 1292.09 143.376)"
                        stroke="#38384D"
                        strokeWidth="1.70399"
                    />
                    <line
                        y1="-0.851995"
                        x2="1723.67"
                        y2="-0.851995"
                        transform="matrix(-0.866026 0.5 -0.866025 -0.5 2648.21 667.109)"
                        stroke="#38384D"
                        strokeWidth="1.70399"
                    />
                    <line
                        y1="-0.851995"
                        x2="1895.85"
                        y2="-0.851995"
                        transform="matrix(0.866025 0.5 -0.866026 0.5 1176.11 210.333)"
                        stroke="#38384D"
                        strokeWidth="1.70399"
                    />
                    <line
                        y1="-0.851995"
                        x2="1723.67"
                        y2="-0.851995"
                        transform="matrix(-0.866026 0.5 -0.866025 -0.5 2520.65 593.464)"
                        stroke="#38384D"
                        strokeWidth="1.70399"
                    />
                    <line
                        y1="-0.851995"
                        x2="1895.85"
                        y2="-0.851995"
                        transform="matrix(0.866025 0.5 -0.866026 0.5 1060.14 277.289)"
                        stroke="#38384D"
                        strokeWidth="1.70399"
                    />
                    <line
                        y1="-0.851995"
                        x2="1723.67"
                        y2="-0.851995"
                        transform="matrix(-0.866026 0.5 -0.866025 -0.5 2393.1 519.818)"
                        stroke="#38384D"
                        strokeWidth="1.70399"
                    />
                    <line
                        y1="-0.851995"
                        x2="1895.85"
                        y2="-0.851995"
                        transform="matrix(0.866025 0.5 -0.866026 0.5 944.169 344.246)"
                        stroke="#38384D"
                        strokeWidth="1.70399"
                    />
                    <line
                        y1="-0.851995"
                        x2="1723.67"
                        y2="-0.851995"
                        transform="matrix(-0.866026 0.5 -0.866025 -0.5 2265.54 446.173)"
                        stroke="#38384D"
                        strokeWidth="1.70399"
                    />
                    <line
                        y1="-0.851995"
                        x2="1895.85"
                        y2="-0.851995"
                        transform="matrix(0.866025 0.5 -0.866026 0.5 828.196 411.204)"
                        stroke="#38384D"
                        strokeWidth="1.70399"
                    />
                    <line
                        y1="-0.851995"
                        x2="1723.67"
                        y2="-0.851995"
                        transform="matrix(-0.866026 0.5 -0.866025 -0.5 2137.98 372.528)"
                        stroke="#38384D"
                        strokeWidth="1.70399"
                    />
                    <line
                        y1="-0.851995"
                        x2="1895.85"
                        y2="-0.851995"
                        transform="matrix(0.866025 0.5 -0.866026 0.5 712.224 478.16)"
                        stroke="#38384D"
                        strokeWidth="1.70399"
                    />
                    <line
                        y1="-0.851995"
                        x2="1723.67"
                        y2="-0.851995"
                        transform="matrix(-0.866026 0.5 -0.866025 -0.5 2010.42 298.88)"
                        stroke="#38384D"
                        strokeWidth="1.70399"
                    />
                    <line
                        y1="-0.851995"
                        x2="1895.85"
                        y2="-0.851995"
                        transform="matrix(0.866025 0.5 -0.866026 0.5 596.246 545.113)"
                        stroke="#38384D"
                        strokeWidth="1.70399"
                    />
                    <line
                        y1="-0.851995"
                        x2="1723.67"
                        y2="-0.851995"
                        transform="matrix(-0.866026 0.5 -0.866025 -0.5 1882.86 225.236)"
                        stroke="#38384D"
                        strokeWidth="1.70399"
                    />
                    <line
                        y1="-0.851995"
                        x2="1895.85"
                        y2="-0.851995"
                        transform="matrix(0.866025 0.5 -0.866026 0.5 480.275 612.07)"
                        stroke="#38384D"
                        strokeWidth="1.70399"
                    />
                    <line
                        y1="-0.851995"
                        x2="1723.67"
                        y2="-0.851995"
                        transform="matrix(-0.866026 0.5 -0.866025 -0.5 1755.31 151.59)"
                        stroke="#38384D"
                        strokeWidth="1.70399"
                    />
                    <line
                        y1="-0.851995"
                        x2="1895.85"
                        y2="-0.851995"
                        transform="matrix(0.866025 0.5 -0.866026 0.5 364.303 679.026)"
                        stroke="#38384D"
                        strokeWidth="1.70399"
                    />
                    <line
                        y1="-0.851995"
                        x2="1723.67"
                        y2="-0.851995"
                        transform="matrix(-0.866026 0.5 -0.866025 -0.5 1627.75 77.9453)"
                        stroke="#38384D"
                        strokeWidth="1.70399"
                    />
                    <line
                        y1="-0.851995"
                        x2="1895.85"
                        y2="-0.851995"
                        transform="matrix(0.866025 0.5 -0.866026 0.5 248.33 745.983)"
                        stroke="#38384D"
                        strokeWidth="1.70399"
                    />
                    <line
                        y1="-0.851995"
                        x2="1723.67"
                        y2="-0.851995"
                        transform="matrix(-0.866026 0.5 -0.866025 -0.5 1500.19 4.30054)"
                        stroke="#38384D"
                        strokeWidth="1.70399"
                    />
                    <line
                        y1="-0.851995"
                        x2="1895.85"
                        y2="-0.851995"
                        transform="matrix(0.866025 0.5 -0.866026 0.5 132.358 812.94)"
                        stroke="#38384D"
                        strokeWidth="1.70399"
                    />
                    <line
                        y1="-0.851995"
                        x2="1895.85"
                        y2="-0.851995"
                        transform="matrix(0.866025 0.5 -0.866026 0.5 16.385 879.897)"
                        stroke="#38384D"
                        strokeWidth="1.70399"
                    />
                </g>

                <g>
                    <g
                        ref={scrollRef}
                        className="cursor-pointer bg-red-500"
                        onClick={handleCardClick}
                    >
                        <motion.g
                            variants={shadowVariants}
                            initial="initial"
                            animate="animate"
                            filter="url(#filter0_bd_47_437)"
                        >
                            <rect
                                width="172.103"
                                height="172.103"
                                rx="20.4479"
                                transform="matrix(0.866025 0.5 -0.866025 0.5 1146.05 820)"
                                fill="#121217"
                            />
                        </motion.g>

                        <motion.g
                            stroke="url(#paint0_linear_47_437)"
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                        >
                            <motion.rect
                                x="-5.07829e-08"
                                y="0.851995"
                                width="170.399"
                                height="170.399"
                                rx="19.5959"
                                transform="matrix(0.866025 0.5 -0.866025 0.5 1146.78 820.426)"
                                strokeWidth="1.70399"
                            />
                            <g clipPath="url(#clip0_47_437)"></g>
                        </motion.g>
                    </g>

                    <g>
                        <motion.g
                            variants={shadowVariants}
                            initial="initial"
                            animate="animate"
                            filter="url(#filter1_bd_47_437)"
                        >
                            <rect
                                width="172.103"
                                height="172.103"
                                rx="20.4479"
                                transform="matrix(0.866025 0.5 -0.866025 0.5 1344.05 936)"
                                fill="#121217"
                            />
                        </motion.g>
                        <motion.g
                            stroke="url(#paint1_linear_47_437)"
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                        >
                            <rect
                                x="-5.07829e-08"
                                y="0.851995"
                                width="170.399"
                                height="170.399"
                                rx="19.5959"
                                transform="matrix(0.866025 0.5 -0.866025 0.5 1344.78 936.426)"
                                strokeWidth="1.70399"
                            />
                            <g clipPath="url(#clip1_47_437)">
                                <path
                                    d="M1351.84 1042.21L1372.37 1009.26C1372.62 1008.85 1372.68 1008.41 1372.53 1007.99C1372.38 1007.57 1372.04 1007.17 1371.54 1006.85C1371.05 1006.53 1370.41 1006.29 1369.7 1006.16C1368.98 1006.02 1368.22 1006.01 1367.49 1006.11L1315.58 1013.2C1314.79 1013.31 1314.08 1013.54 1313.51 1013.87C1312.95 1014.21 1312.56 1014.62 1312.39 1015.08L1307.08 1029.33C1306.88 1029.87 1306.99 1030.43 1307.39 1030.93C1307.79 1031.43 1308.45 1031.84 1309.29 1032.1L1345.72 1043.53C1346.27 1043.7 1346.87 1043.8 1347.49 1043.83C1348.11 1043.86 1348.74 1043.81 1349.32 1043.68C1349.9 1043.56 1350.43 1043.36 1350.87 1043.1C1351.3 1042.85 1351.63 1042.54 1351.84 1042.21L1351.84 1042.21ZM1346.09 1040.81L1315.18 1031.11C1314.23 1030.81 1314.16 1030.04 1315.05 1029.71L1364.38 1011.06C1365.31 1010.72 1366.48 1011.25 1366.11 1011.85L1348.38 1040.31C1348.3 1040.44 1348.18 1040.55 1348.01 1040.65C1347.85 1040.74 1347.65 1040.82 1347.43 1040.86C1347.21 1040.91 1346.98 1040.93 1346.75 1040.92C1346.52 1040.91 1346.29 1040.87 1346.09 1040.81L1346.09 1040.81Z"
                                    fill="#38384D"
                                />
                            </g>
                        </motion.g>
                    </g>

                    <g>
                        <motion.g
                            variants={shadowVariants}
                            initial="initial"
                            animate="animate"
                            filter="url(#filter2_bd_47_437)"
                        >
                            <rect
                                width="172.103"
                                height="172.103"
                                rx="20.4479"
                                transform="matrix(0.866025 0.5 -0.866025 0.5 1560.05 1054)"
                                fill="#121217"
                            />
                        </motion.g>
                        <motion.g
                            stroke="url(#paint2_linear_47_437)"
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                        >
                            <rect
                                x="-5.07829e-08"
                                y="0.851995"
                                width="170.399"
                                height="170.399"
                                rx="19.5959"
                                transform="matrix(0.866025 0.5 -0.866025 0.5 1560.78 1054.43)"
                                strokeWidth="1.70399"
                            />
                            <g clipPath="url(#clip2_47_437)">
                                <path
                                    d="M1567.84 1160.21L1588.37 1127.26C1588.62 1126.85 1588.68 1126.41 1588.53 1125.99C1588.38 1125.57 1588.04 1125.17 1587.54 1124.85C1587.05 1124.53 1586.41 1124.29 1585.7 1124.16C1584.98 1124.02 1584.22 1124.01 1583.49 1124.11L1531.58 1131.2C1530.79 1131.31 1530.08 1131.54 1529.51 1131.87C1528.95 1132.21 1528.56 1132.62 1528.39 1133.08L1523.08 1147.33C1522.88 1147.87 1522.99 1148.43 1523.39 1148.93C1523.79 1149.43 1524.45 1149.84 1525.29 1150.1L1561.72 1161.53C1562.27 1161.7 1562.87 1161.8 1563.49 1161.83C1564.11 1161.86 1564.74 1161.81 1565.32 1161.68C1565.9 1161.56 1566.43 1161.36 1566.87 1161.1C1567.3 1160.85 1567.63 1160.54 1567.84 1160.21L1567.84 1160.21ZM1562.09 1158.81L1531.18 1149.11C1530.23 1148.81 1530.16 1148.04 1531.05 1147.71L1580.38 1129.06C1581.31 1128.72 1582.48 1129.25 1582.11 1129.85L1564.38 1158.31C1564.3 1158.44 1564.18 1158.55 1564.01 1158.65C1563.85 1158.74 1563.65 1158.82 1563.43 1158.86C1563.21 1158.91 1562.98 1158.93 1562.75 1158.92C1562.52 1158.91 1562.29 1158.87 1562.09 1158.81L1562.09 1158.81Z"
                                    fill="#38384D"
                                />
                            </g>
                        </motion.g>
                    </g>

                    <g>
                        <motion.g
                            variants={shadowVariants}
                            initial="initial"
                            animate="animate"
                            filter="url(#filter3_bd_47_437)"
                        >
                            <rect
                                width="172.103"
                                height="172.103"
                                rx="20.4479"
                                transform="matrix(0.866025 0.5 -0.866025 0.5 1379.05 701)"
                                fill="#131313"
                                fillOpacity="0.6"
                                shapeRendering="crispEdges"
                            />
                        </motion.g>

                        <motion.g
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                            filter="url(#filter4_bd_47_437)"
                        >
                            <rect
                                width="172.103"
                                height="172.103"
                                rx="20.4479"
                                transform="matrix(0.866025 0.5 -0.866025 0.5 1388.05 667)"
                                fill="#121217"
                            />
                            <rect
                                x="-5.07829e-08"
                                y="0.851995"
                                width="170.399"
                                height="170.399"
                                rx="19.5959"
                                transform="matrix(0.866025 0.5 -0.866025 0.5 1388.78 667.426)"
                                stroke="url(#paint3_linear_47_437)"
                                strokeWidth="1.70399"
                            />
                            <g clipPath="url(#clip3_47_437)">
                                <path
                                    d="M1395.84 773.207L1416.37 740.259C1416.62 739.852 1416.67 739.414 1416.53 738.991C1416.38 738.567 1416.04 738.174 1415.54 737.854C1415.05 737.528 1414.41 737.287 1413.7 737.156C1412.98 737.025 1412.22 737.01 1411.49 737.112L1359.58 744.201C1358.79 744.307 1358.08 744.54 1357.51 744.873C1356.95 745.205 1356.56 745.624 1356.39 746.08L1351.08 760.335C1350.88 760.872 1350.99 761.431 1351.39 761.929C1351.79 762.427 1352.45 762.837 1353.29 763.099L1389.72 774.529C1390.27 774.702 1390.87 774.805 1391.49 774.831C1392.11 774.858 1392.74 774.807 1393.32 774.682C1393.9 774.556 1394.43 774.36 1394.87 774.105C1395.3 773.85 1395.63 773.544 1395.84 773.207L1395.84 773.207ZM1390.09 771.806L1359.18 762.106C1358.23 761.81 1358.16 761.043 1359.05 760.706L1408.38 742.065C1409.31 741.716 1410.48 742.255 1410.11 742.855L1392.38 771.309C1392.3 771.436 1392.18 771.551 1392.01 771.647C1391.85 771.742 1391.65 771.816 1391.43 771.863C1391.21 771.91 1390.98 771.93 1390.75 771.92C1390.52 771.91 1390.29 771.871 1390.09 771.806L1390.09 771.806Z"
                                    fill="#38384D"
                                />
                            </g>
                        </motion.g>
                    </g>

                    <g>
                        <motion.g
                            variants={shadowVariants}
                            initial="initial"
                            animate="animate"
                            filter="url(#filter5_bd_47_437)"
                        >
                            <rect
                                width="172.103"
                                height="172.103"
                                rx="20.4479"
                                transform="matrix(0.866025 0.5 -0.866025 0.5 1593.05 779)"
                                fill="#121217"
                            />
                        </motion.g>
                        <motion.g variants={cardVariants} initial="initial" animate="animate">
                            <rect
                                x="-5.07829e-08"
                                y="0.851995"
                                width="170.399"
                                height="170.399"
                                rx="19.5959"
                                transform="matrix(0.866025 0.5 -0.866025 0.5 1593.78 779.426)"
                                stroke="url(#paint5_linear_47_437)"
                                strokeWidth="1.70399"
                            />
                            <g clipPath="url(#clip4_47_437)">
                                <path
                                    d="M1600.84 885.207L1621.37 852.259C1621.62 851.852 1621.68 851.414 1621.53 850.991C1621.38 850.567 1621.04 850.174 1620.54 849.854C1620.05 849.528 1619.41 849.287 1618.7 849.156C1617.98 849.025 1617.22 849.01 1616.49 849.112L1564.58 856.201C1563.79 856.307 1563.08 856.54 1562.51 856.873C1561.95 857.205 1561.56 857.624 1561.39 858.08L1556.08 872.335C1555.88 872.872 1555.99 873.431 1556.39 873.929C1556.79 874.427 1557.45 874.837 1558.29 875.099L1594.72 886.529C1595.27 886.702 1595.87 886.805 1596.49 886.831C1597.11 886.858 1597.74 886.807 1598.32 886.682C1598.9 886.556 1599.43 886.36 1599.87 886.105C1600.3 885.85 1600.63 885.544 1600.84 885.207L1600.84 885.207ZM1595.09 883.806L1564.18 874.106C1563.23 873.81 1563.16 873.043 1564.05 872.706L1613.38 854.065C1614.31 853.716 1615.48 854.255 1615.11 854.855L1597.38 883.309C1597.3 883.436 1597.18 883.551 1597.01 883.647C1596.85 883.742 1596.65 883.816 1596.43 883.863C1596.21 883.91 1595.98 883.93 1595.75 883.92C1595.52 883.91 1595.29 883.871 1595.09 883.806L1595.09 883.806Z"
                                    fill="#38384D"
                                />
                            </g>
                        </motion.g>
                    </g>

                    <g>
                        <motion.g
                            variants={shadowVariants}
                            initial="initial"
                            animate="animate"
                            filter="url(#filter6_bd_47_437)"
                        >
                            <rect
                                width="172.103"
                                height="172.103"
                                rx="20.4479"
                                transform="matrix(0.866025 0.5 -0.866025 0.5 1796.05 906)"
                                fill="#121217"
                            />
                        </motion.g>
                        <motion.g variants={cardVariants} initial="initial" animate="animate">
                            <rect
                                x="-5.07829e-08"
                                y="0.851995"
                                width="170.399"
                                height="170.399"
                                rx="19.5959"
                                transform="matrix(0.866025 0.5 -0.866025 0.5 1796.78 906.426)"
                                stroke="url(#paint6_linear_47_437)"
                                strokeWidth="1.70399"
                            />
                            <g clipPath="url(#clip5_47_437)">
                                <path
                                    d="M1803.84 1012.21L1824.37 979.259C1824.62 978.852 1824.68 978.414 1824.53 977.99C1824.38 977.567 1824.04 977.174 1823.54 976.854C1823.05 976.528 1822.41 976.286 1821.7 976.155C1820.98 976.025 1820.22 976.009 1819.49 976.111L1767.58 983.201C1766.79 983.307 1766.08 983.539 1765.51 983.872C1764.95 984.205 1764.56 984.624 1764.39 985.08L1759.08 999.335C1758.88 999.872 1758.99 1000.43 1759.39 1000.93C1759.79 1001.43 1760.45 1001.84 1761.29 1002.1L1797.72 1013.53C1798.27 1013.7 1798.87 1013.8 1799.49 1013.83C1800.11 1013.86 1800.74 1013.81 1801.32 1013.68C1801.9 1013.56 1802.43 1013.36 1802.87 1013.1C1803.3 1012.85 1803.63 1012.54 1803.84 1012.21L1803.84 1012.21ZM1798.09 1010.81L1767.18 1001.11C1766.23 1000.81 1766.16 1000.04 1767.05 999.706L1816.38 981.064C1817.31 980.716 1818.48 981.255 1818.11 981.855L1800.38 1010.31C1800.3 1010.44 1800.18 1010.55 1800.01 1010.65C1799.85 1010.74 1799.65 1010.82 1799.43 1010.86C1799.21 1010.91 1798.98 1010.93 1798.75 1010.92C1798.52 1010.91 1798.29 1010.87 1798.09 1010.81L1798.09 1010.81Z"
                                    fill="#38384D"
                                />
                            </g>
                        </motion.g>
                    </g>

                    <g>
                        <motion.g
                            variants={shadowVariants}
                            initial="initial"
                            animate="animate"
                            filter="url(#filter7_bd_47_437)"
                        >
                            <rect
                                width="172.103"
                                height="172.103"
                                rx="20.4479"
                                transform="matrix(0.866025 0.5 -0.866025 0.5 1629.05 525)"
                                fill="#121217"
                            />
                        </motion.g>
                        <motion.g variants={cardVariants} initial="initial" animate="animate">
                            <rect
                                x="-5.07829e-08"
                                y="0.851995"
                                width="170.399"
                                height="170.399"
                                rx="19.5959"
                                transform="matrix(0.866025 0.5 -0.866025 0.5 1629.78 525.426)"
                                stroke="url(#paint7_linear_47_437)"
                                strokeWidth="1.70399"
                            />
                            <g clipPath="url(#clip6_47_437)">
                                <path
                                    d="M1636.84 631.207L1657.37 598.259C1657.62 597.852 1657.68 597.414 1657.53 596.991C1657.38 596.567 1657.04 596.174 1656.54 595.854C1656.05 595.528 1655.41 595.287 1654.7 595.156C1653.98 595.025 1653.22 595.01 1652.49 595.112L1600.58 602.201C1599.79 602.307 1599.08 602.54 1598.51 602.873C1597.95 603.205 1597.56 603.624 1597.39 604.08L1592.08 618.335C1591.88 618.872 1591.99 619.431 1592.39 619.929C1592.79 620.427 1593.45 620.837 1594.29 621.099L1630.72 632.529C1631.27 632.702 1631.87 632.805 1632.49 632.831C1633.11 632.858 1633.74 632.807 1634.32 632.682C1634.9 632.556 1635.43 632.36 1635.87 632.105C1636.3 631.85 1636.63 631.544 1636.84 631.207L1636.84 631.207ZM1631.09 629.806L1600.18 620.106C1599.23 619.81 1599.16 619.043 1600.05 618.706L1649.38 600.065C1650.31 599.716 1651.48 600.255 1651.11 600.855L1633.38 629.309C1633.3 629.436 1633.18 629.551 1633.01 629.647C1632.85 629.742 1632.65 629.816 1632.43 629.863C1632.21 629.91 1631.98 629.93 1631.75 629.92C1631.52 629.91 1631.29 629.871 1631.09 629.806L1631.09 629.806Z"
                                    fill="#38384D"
                                />
                            </g>
                        </motion.g>
                    </g>

                    <g>
                        <motion.g
                            variants={shadowVariants}
                            initial="initial"
                            animate="animate"
                            filter="url(#filter8_bd_47_437)"
                        >
                            <rect
                                width="172.103"
                                height="172.103"
                                rx="20.4479"
                                transform="matrix(0.866025 0.5 -0.866025 0.5 1834.05 637)"
                                fill="#121217"
                            />
                        </motion.g>
                        <motion.g variants={cardVariants} initial="initial" animate="animate">
                            <rect
                                x="-5.07829e-08"
                                y="0.851995"
                                width="170.399"
                                height="170.399"
                                rx="19.5959"
                                transform="matrix(0.866025 0.5 -0.866025 0.5 1834.78 637.426)"
                                stroke="url(#paint8_linear_47_437)"
                                strokeWidth="1.70399"
                            />
                            <g clipPath="url(#clip7_47_437)">
                                <path
                                    d="M1841.84 743.207L1862.37 710.259C1862.62 709.852 1862.68 709.414 1862.53 708.991C1862.38 708.567 1862.04 708.174 1861.54 707.854C1861.05 707.528 1860.41 707.287 1859.7 707.156C1858.98 707.025 1858.22 707.01 1857.49 707.112L1805.58 714.201C1804.79 714.307 1804.08 714.54 1803.51 714.873C1802.95 715.205 1802.56 715.624 1802.39 716.08L1797.08 730.335C1796.88 730.872 1796.99 731.431 1797.39 731.929C1797.79 732.427 1798.45 732.837 1799.29 733.099L1835.72 744.529C1836.27 744.702 1836.87 744.805 1837.49 744.831C1838.11 744.858 1838.74 744.807 1839.32 744.682C1839.9 744.556 1840.43 744.36 1840.87 744.105C1841.3 743.85 1841.63 743.544 1841.84 743.207L1841.84 743.207ZM1836.09 741.806L1805.18 732.106C1804.23 731.81 1804.16 731.043 1805.05 730.706L1854.38 712.065C1855.31 711.716 1856.48 712.255 1856.11 712.855L1838.38 741.309C1838.3 741.436 1838.18 741.551 1838.01 741.647C1837.85 741.742 1837.65 741.816 1837.43 741.863C1837.21 741.91 1836.98 741.93 1836.75 741.92C1836.52 741.91 1836.29 741.871 1836.09 741.806L1836.09 741.806Z"
                                    fill="#38384D"
                                />
                            </g>
                        </motion.g>
                    </g>

                    <g>
                        <motion.g
                            variants={shadowVariants}
                            initial="initial"
                            animate="animate"
                            filter="url(#filter9_bd_47_437)"
                        >
                            <rect
                                width="172.103"
                                height="172.103"
                                rx="20.4479"
                                transform="matrix(0.866025 0.5 -0.866025 0.5 2037.05 764)"
                                fill="#121217"
                            />
                        </motion.g>
                        <motion.g variants={cardVariants} initial="initial" animate="animate">
                            <rect
                                x="-5.07829e-08"
                                y="0.851995"
                                width="170.399"
                                height="170.399"
                                rx="19.5959"
                                transform="matrix(0.866025 0.5 -0.866025 0.5 2037.78 764.426)"
                                stroke="url(#paint9_linear_47_437)"
                                strokeWidth="1.70399"
                            />
                            <g clipPath="url(#clip8_47_437)">
                                <path
                                    d="M2044.84 870.207L2065.37 837.259C2065.62 836.852 2065.68 836.414 2065.53 835.991C2065.38 835.567 2065.04 835.174 2064.54 834.854C2064.05 834.528 2063.41 834.287 2062.7 834.156C2061.98 834.025 2061.22 834.01 2060.49 834.112L2008.58 841.201C2007.79 841.307 2007.08 841.54 2006.51 841.873C2005.95 842.205 2005.56 842.624 2005.39 843.08L2000.08 857.335C1999.88 857.872 1999.99 858.431 2000.39 858.929C2000.79 859.427 2001.45 859.837 2002.29 860.099L2038.72 871.529C2039.27 871.702 2039.87 871.805 2040.49 871.831C2041.11 871.858 2041.74 871.807 2042.32 871.682C2042.9 871.556 2043.43 871.36 2043.87 871.105C2044.3 870.85 2044.63 870.544 2044.84 870.207L2044.84 870.207ZM2039.09 868.806L2008.18 859.106C2007.23 858.81 2007.16 858.043 2008.05 857.706L2057.38 839.065C2058.31 838.716 2059.48 839.255 2059.11 839.855L2041.38 868.309C2041.3 868.436 2041.18 868.551 2041.01 868.647C2040.85 868.742 2040.65 868.816 2040.43 868.863C2040.21 868.91 2039.98 868.93 2039.75 868.92C2039.52 868.91 2039.29 868.871 2039.09 868.806L2039.09 868.806Z"
                                    fill="#38384D"
                                />
                            </g>
                        </motion.g>
                    </g>
                </g>

                <defs>
                    <filter
                        id="filter0_bd_47_437"
                        x="954.4"
                        y="785.92"
                        width="374.771"
                        height="267.526"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="17.0399" />
                        <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_47_437"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="-8.51995" dy="27.2638" />
                        <feGaussianBlur stdDeviation="17.0399" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_47_437"
                            result="effect2_dropShadow_47_437"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_47_437"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter1_bd_47_437"
                        x="1152.4"
                        y="901.92"
                        width="374.771"
                        height="267.526"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="17.0399" />
                        <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_47_437"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="-8.51995" dy="27.2638" />
                        <feGaussianBlur stdDeviation="17.0399" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_47_437"
                            result="effect2_dropShadow_47_437"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_47_437"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter2_bd_47_437"
                        x="1368.4"
                        y="1019.92"
                        width="374.771"
                        height="267.526"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="17.0399" />
                        <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_47_437"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="-8.51995" dy="27.2638" />
                        <feGaussianBlur stdDeviation="17.0399" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_47_437"
                            result="effect2_dropShadow_47_437"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_47_437"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter3_bd_47_437"
                        x="1187.4"
                        y="666.92"
                        width="374.771"
                        height="267.526"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="17.0399" />
                        <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_47_437"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="-8.51995" dy="27.2638" />
                        <feGaussianBlur stdDeviation="17.0399" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_47_437"
                            result="effect2_dropShadow_47_437"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_47_437"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter4_bd_47_437"
                        x="1196.4"
                        y="632.92"
                        width="374.771"
                        height="267.526"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="17.0399" />
                        <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_47_437"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="-8.51995" dy="27.2638" />
                        <feGaussianBlur stdDeviation="17.0399" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_47_437"
                            result="effect2_dropShadow_47_437"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_47_437"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter5_bd_47_437"
                        x="1401.4"
                        y="744.92"
                        width="374.771"
                        height="267.526"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="17.0399" />
                        <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_47_437"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="-8.51995" dy="27.2638" />
                        <feGaussianBlur stdDeviation="17.0399" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_47_437"
                            result="effect2_dropShadow_47_437"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_47_437"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter6_bd_47_437"
                        x="1604.4"
                        y="871.92"
                        width="374.771"
                        height="267.526"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="17.0399" />
                        <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_47_437"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="-8.51995" dy="27.2638" />
                        <feGaussianBlur stdDeviation="17.0399" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_47_437"
                            result="effect2_dropShadow_47_437"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_47_437"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter7_bd_47_437"
                        x="1437.4"
                        y="490.92"
                        width="374.771"
                        height="267.526"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="17.0399" />
                        <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_47_437"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="-8.51995" dy="27.2638" />
                        <feGaussianBlur stdDeviation="17.0399" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_47_437"
                            result="effect2_dropShadow_47_437"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_47_437"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter8_bd_47_437"
                        x="1642.4"
                        y="602.92"
                        width="374.771"
                        height="267.526"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="17.0399" />
                        <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_47_437"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="-8.51995" dy="27.2638" />
                        <feGaussianBlur stdDeviation="17.0399" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_47_437"
                            result="effect2_dropShadow_47_437"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_47_437"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter9_bd_47_437"
                        x="1845.4"
                        y="729.92"
                        width="374.771"
                        height="267.526"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="17.0399" />
                        <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_47_437"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="-8.51995" dy="27.2638" />
                        <feGaussianBlur stdDeviation="17.0399" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_47_437"
                            result="effect2_dropShadow_47_437"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_47_437"
                            result="shape"
                        />
                    </filter>
                    <linearGradient
                        id="paint0_linear_47_437"
                        x1="3.98961"
                        y1="2.52866e-05"
                        x2="183.752"
                        y2="37.4349"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.0229588" stopColor="#17171F" />
                        <stop offset="0.505208" stopColor="#38384D" />
                        <stop offset="0.979167" stopColor="#17171F" />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_47_437"
                        x1="3.98961"
                        y1="2.52866e-05"
                        x2="183.752"
                        y2="37.4349"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.0229588" stopColor="#17171F" />
                        <stop offset="0.505208" stopColor="#38384D" />
                        <stop offset="0.979167" stopColor="#17171F" />
                    </linearGradient>
                    <linearGradient
                        id="paint2_linear_47_437"
                        x1="3.98961"
                        y1="2.52866e-05"
                        x2="183.752"
                        y2="37.4349"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.0229588" stopColor="#17171F" />
                        <stop offset="0.505208" stopColor="#38384D" />
                        <stop offset="0.979167" stopColor="#17171F" />
                    </linearGradient>
                    <linearGradient
                        id="paint3_linear_47_437"
                        x1="3.98961"
                        y1="2.52866e-05"
                        x2="183.752"
                        y2="37.4349"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.0229588" stopColor="#17171F" />
                        <stop offset="0.505208" stopColor="#38384D" />
                        <stop offset="0.979167" stopColor="#17171F" />
                    </linearGradient>
                    <linearGradient
                        id="paint4_linear_47_437"
                        x1="1334.72"
                        y1="363.408"
                        x2="1390.66"
                        y2="404.705"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="#9898A3" />
                    </linearGradient>
                    <linearGradient
                        id="paint5_linear_47_437"
                        x1="3.98961"
                        y1="2.52866e-05"
                        x2="183.752"
                        y2="37.4349"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.0229588" stopColor="#17171F" />
                        <stop offset="0.505208" stopColor="#38384D" />
                        <stop offset="0.979167" stopColor="#17171F" />
                    </linearGradient>
                    <linearGradient
                        id="paint6_linear_47_437"
                        x1="3.98961"
                        y1="2.52866e-05"
                        x2="183.752"
                        y2="37.4349"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.0229588" stopColor="#17171F" />
                        <stop offset="0.505208" stopColor="#38384D" />
                        <stop offset="0.979167" stopColor="#17171F" />
                    </linearGradient>
                    <linearGradient
                        id="paint7_linear_47_437"
                        x1="3.98961"
                        y1="2.52866e-05"
                        x2="183.752"
                        y2="37.4349"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.0229588" stopColor="#17171F" />
                        <stop offset="0.505208" stopColor="#38384D" />
                        <stop offset="0.979167" stopColor="#17171F" />
                    </linearGradient>
                    <linearGradient
                        id="paint8_linear_47_437"
                        x1="3.98961"
                        y1="2.52866e-05"
                        x2="183.752"
                        y2="37.4349"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.0229588" stopColor="#17171F" />
                        <stop offset="0.505208" stopColor="#38384D" />
                        <stop offset="0.979167" stopColor="#17171F" />
                    </linearGradient>
                    <linearGradient
                        id="paint9_linear_47_437"
                        x1="3.98961"
                        y1="2.52866e-05"
                        x2="183.752"
                        y2="37.4349"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.0229588" stopColor="#17171F" />
                        <stop offset="0.505208" stopColor="#38384D" />
                        <stop offset="0.979167" stopColor="#17171F" />
                    </linearGradient>
                    <clipPath id="clip0_47_437">
                        <rect
                            width="81.7915"
                            height="81.7915"
                            fill="white"
                            transform="matrix(0.866025 0.5 -0.866025 0.5 1146.05 864.747)"
                        />
                    </clipPath>
                    <clipPath id="clip1_47_437">
                        <rect
                            width="81.7915"
                            height="81.7915"
                            fill="white"
                            transform="matrix(0.866025 0.5 -0.866025 0.5 1344.05 980.747)"
                        />
                    </clipPath>
                    <clipPath id="clip2_47_437">
                        <rect
                            width="81.7915"
                            height="81.7915"
                            fill="white"
                            transform="matrix(0.866025 0.5 -0.866025 0.5 1560.05 1098.75)"
                        />
                    </clipPath>
                    <clipPath id="clip3_47_437">
                        <rect
                            width="81.7915"
                            height="81.7915"
                            fill="white"
                            transform="matrix(0.866025 0.5 -0.866025 0.5 1388.05 711.747)"
                        />
                    </clipPath>
                    <clipPath id="clip4_47_437">
                        <rect
                            width="81.7915"
                            height="81.7915"
                            fill="white"
                            transform="matrix(0.866025 0.5 -0.866025 0.5 1593.05 823.747)"
                        />
                    </clipPath>
                    <clipPath id="clip5_47_437">
                        <rect
                            width="81.7915"
                            height="81.7915"
                            fill="white"
                            transform="matrix(0.866025 0.5 -0.866025 0.5 1796.05 950.747)"
                        />
                    </clipPath>
                    <clipPath id="clip6_47_437">
                        <rect
                            width="81.7915"
                            height="81.7915"
                            fill="white"
                            transform="matrix(0.866025 0.5 -0.866025 0.5 1629.05 569.747)"
                        />
                    </clipPath>
                    <clipPath id="clip7_47_437">
                        <rect
                            width="81.7915"
                            height="81.7915"
                            fill="white"
                            transform="matrix(0.866025 0.5 -0.866025 0.5 1834.05 681.747)"
                        />
                    </clipPath>
                    <clipPath id="clip8_47_437">
                        <rect
                            width="81.7915"
                            height="81.7915"
                            fill="white"
                            transform="matrix(0.866025 0.5 -0.866025 0.5 2037.05 808.747)"
                        />
                    </clipPath>
                    <filter
                        id="filter0_bd_58_529"
                        x="1374.4"
                        y="751.92"
                        width="374.771"
                        height="267.526"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="17.0399" />
                        <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_58_529"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="-8.51995" dy="27.2638" />
                        <feGaussianBlur stdDeviation="17.0399" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_58_529"
                            result="effect2_dropShadow_58_529"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_58_529"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter1_bd_58_529"
                        x="1383.4"
                        y="717.92"
                        width="374.771"
                        height="267.526"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="17.0399" />
                        <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_58_529"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="-8.51995" dy="27.2638" />
                        <feGaussianBlur stdDeviation="17.0399" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_58_529"
                            result="effect2_dropShadow_58_529"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_58_529"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter2_bd_58_529"
                        x="1568.4"
                        y="640.92"
                        width="374.771"
                        height="267.526"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="17.0399" />
                        <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_58_529"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="-8.51995" dy="27.2638" />
                        <feGaussianBlur stdDeviation="17.0399" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_58_529"
                            result="effect2_dropShadow_58_529"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_58_529"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter3_bd_58_529"
                        x="1577.4"
                        y="606.92"
                        width="374.771"
                        height="267.526"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="17.0399" />
                        <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_58_529"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="-8.51995" dy="27.2638" />
                        <feGaussianBlur stdDeviation="17.0399" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_58_529"
                            result="effect2_dropShadow_58_529"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_58_529"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter4_bd_58_529"
                        x="1169.4"
                        y="871.92"
                        width="374.771"
                        height="267.526"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="17.0399" />
                        <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_58_529"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="-8.51995" dy="27.2638" />
                        <feGaussianBlur stdDeviation="17.0399" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_58_529"
                            result="effect2_dropShadow_58_529"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_58_529"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter5_bd_58_529"
                        x="1178.4"
                        y="837.92"
                        width="374.771"
                        height="267.526"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="17.0399" />
                        <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_58_529"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="-8.51995" dy="27.2638" />
                        <feGaussianBlur stdDeviation="17.0399" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_58_529"
                            result="effect2_dropShadow_58_529"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_58_529"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter6_bd_58_529"
                        x="1569.4"
                        y="862.92"
                        width="374.771"
                        height="267.526"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="17.0399" />
                        <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_58_529"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="-8.51995" dy="27.2638" />
                        <feGaussianBlur stdDeviation="17.0399" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_58_529"
                            result="effect2_dropShadow_58_529"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_58_529"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter7_bd_58_529"
                        x="1578.4"
                        y="828.92"
                        width="374.771"
                        height="267.526"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="17.0399" />
                        <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_58_529"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="-8.51995" dy="27.2638" />
                        <feGaussianBlur stdDeviation="17.0399" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_58_529"
                            result="effect2_dropShadow_58_529"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_58_529"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter8_bd_58_529"
                        x="1763.4"
                        y="751.92"
                        width="374.771"
                        height="267.526"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="17.0399" />
                        <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_58_529"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="-8.51995" dy="27.2638" />
                        <feGaussianBlur stdDeviation="17.0399" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_58_529"
                            result="effect2_dropShadow_58_529"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_58_529"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter9_bd_58_529"
                        x="1772.4"
                        y="717.92"
                        width="374.771"
                        height="267.526"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="17.0399" />
                        <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_58_529"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="-8.51995" dy="27.2638" />
                        <feGaussianBlur stdDeviation="17.0399" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_58_529"
                            result="effect2_dropShadow_58_529"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_58_529"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter10_bd_58_529"
                        x="1364.4"
                        y="982.92"
                        width="374.771"
                        height="267.526"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="17.0399" />
                        <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_58_529"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="-8.51995" dy="27.2638" />
                        <feGaussianBlur stdDeviation="17.0399" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_58_529"
                            result="effect2_dropShadow_58_529"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_58_529"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter11_bd_58_529"
                        x="1373.4"
                        y="948.92"
                        width="374.771"
                        height="267.526"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="17.0399" />
                        <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_58_529"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="-8.51995" dy="27.2638" />
                        <feGaussianBlur stdDeviation="17.0399" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_58_529"
                            result="effect2_dropShadow_58_529"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_58_529"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter12_bd_58_529"
                        x="1773.4"
                        y="982.92"
                        width="374.771"
                        height="267.526"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="17.0399" />
                        <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_58_529"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="-8.51995" dy="27.2638" />
                        <feGaussianBlur stdDeviation="17.0399" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_58_529"
                            result="effect2_dropShadow_58_529"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_58_529"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter13_bd_58_529"
                        x="1782.4"
                        y="948.92"
                        width="374.771"
                        height="267.526"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="17.0399" />
                        <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_58_529"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="-8.51995" dy="27.2638" />
                        <feGaussianBlur stdDeviation="17.0399" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_58_529"
                            result="effect2_dropShadow_58_529"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_58_529"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter14_bd_58_529"
                        x="1967.4"
                        y="871.92"
                        width="374.771"
                        height="267.526"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="17.0399" />
                        <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_58_529"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="-8.51995" dy="27.2638" />
                        <feGaussianBlur stdDeviation="17.0399" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_58_529"
                            result="effect2_dropShadow_58_529"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_58_529"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter15_bd_58_529"
                        x="1976.4"
                        y="837.92"
                        width="374.771"
                        height="267.526"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="17.0399" />
                        <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_58_529"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="-8.51995" dy="27.2638" />
                        <feGaussianBlur stdDeviation="17.0399" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_58_529"
                            result="effect2_dropShadow_58_529"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_58_529"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter16_bd_58_529"
                        x="1568.4"
                        y="1102.92"
                        width="374.771"
                        height="267.526"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="17.0399" />
                        <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_58_529"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="-8.51995" dy="27.2638" />
                        <feGaussianBlur stdDeviation="17.0399" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_58_529"
                            result="effect2_dropShadow_58_529"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_58_529"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter17_bd_58_529"
                        x="1577.4"
                        y="1068.92"
                        width="374.771"
                        height="267.526"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="17.0399" />
                        <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_58_529"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="-8.51995" dy="27.2638" />
                        <feGaussianBlur stdDeviation="17.0399" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_58_529"
                            result="effect2_dropShadow_58_529"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_58_529"
                            result="shape"
                        />
                    </filter>
                    <linearGradient
                        id="paint0_linear_58_529"
                        x1="3.98961"
                        y1="2.52866e-05"
                        x2="183.752"
                        y2="37.4349"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.0229588" stopColor="#17171F" />
                        <stop offset="0.505208" stopColor="#38384D" />
                        <stop offset="0.979167" stopColor="#17171F" />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_58_529"
                        x1="3.98961"
                        y1="2.52866e-05"
                        x2="183.752"
                        y2="37.4349"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.0229588" stopColor="#17171F" />
                        <stop offset="0.505208" stopColor="#38384D" />
                        <stop offset="0.979167" stopColor="#17171F" />
                    </linearGradient>
                    <linearGradient
                        id="paint2_linear_58_529"
                        x1="3.98961"
                        y1="2.52866e-05"
                        x2="183.752"
                        y2="37.4349"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.0229588" stopColor="#17171F" />
                        <stop offset="0.505208" stopColor="#38384D" />
                        <stop offset="0.979167" stopColor="#17171F" />
                    </linearGradient>
                    <linearGradient
                        id="paint3_linear_58_529"
                        x1="3.98961"
                        y1="2.52866e-05"
                        x2="183.752"
                        y2="37.4349"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.0229588" stopColor="#17171F" />
                        <stop offset="0.505208" stopColor="#38384D" />
                        <stop offset="0.979167" stopColor="#17171F" />
                    </linearGradient>
                    <linearGradient
                        id="paint4_linear_58_529"
                        x1="3.98961"
                        y1="2.52866e-05"
                        x2="183.752"
                        y2="37.4349"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.0229588" stopColor="#17171F" />
                        <stop offset="0.505208" stopColor="#38384D" />
                        <stop offset="0.979167" stopColor="#17171F" />
                    </linearGradient>
                    <linearGradient
                        id="paint5_linear_58_529"
                        x1="3.98961"
                        y1="2.52866e-05"
                        x2="183.752"
                        y2="37.4349"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.0229588" stopColor="#17171F" />
                        <stop offset="0.505208" stopColor="#38384D" />
                        <stop offset="0.979167" stopColor="#17171F" />
                    </linearGradient>
                    <linearGradient
                        id="paint6_linear_58_529"
                        x1="3.98961"
                        y1="2.52866e-05"
                        x2="183.752"
                        y2="37.4349"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.0229588" stopColor="#17171F" />
                        <stop offset="0.505208" stopColor="#38384D" />
                        <stop offset="0.979167" stopColor="#17171F" />
                    </linearGradient>
                    <linearGradient
                        id="paint7_linear_58_529"
                        x1="3.98961"
                        y1="2.52866e-05"
                        x2="183.752"
                        y2="37.4349"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.0229588" stopColor="#17171F" />
                        <stop offset="0.505208" stopColor="#38384D" />
                        <stop offset="0.979167" stopColor="#17171F" />
                    </linearGradient>
                    <linearGradient
                        id="paint8_linear_58_529"
                        x1="3.98961"
                        y1="2.52866e-05"
                        x2="183.752"
                        y2="37.4349"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.0229588" stopColor="#17171F" />
                        <stop offset="0.505208" stopColor="#38384D" />
                        <stop offset="0.979167" stopColor="#17171F" />
                    </linearGradient>
                    <clipPath id="clip0_58_529">
                        <rect
                            width="81.7915"
                            height="81.7915"
                            fill="white"
                            transform="matrix(0.866025 0.5 -0.866025 0.5 1574.83 796.924)"
                        />
                    </clipPath>
                    <clipPath id="clip1_58_529">
                        <rect
                            width="81.7915"
                            height="81.7915"
                            fill="white"
                            transform="matrix(0.866025 0.5 -0.866025 0.5 1768.83 685.924)"
                        />
                    </clipPath>
                    <clipPath id="clip2_58_529">
                        <rect
                            width="81.7915"
                            height="81.7915"
                            fill="white"
                            transform="matrix(0.866025 0.5 -0.866025 0.5 1369.83 916.924)"
                        />
                    </clipPath>
                    <clipPath id="clip3_58_529">
                        <rect
                            width="81.7915"
                            height="81.7915"
                            fill="white"
                            transform="matrix(0.866025 0.5 -0.866025 0.5 1769.83 907.924)"
                        />
                    </clipPath>
                    <clipPath id="clip4_58_529">
                        <rect
                            width="81.7915"
                            height="81.7915"
                            fill="white"
                            transform="matrix(0.866025 0.5 -0.866025 0.5 1963.83 796.924)"
                        />
                    </clipPath>
                    <clipPath id="clip5_58_529">
                        <rect
                            width="81.7915"
                            height="81.7915"
                            fill="white"
                            transform="matrix(0.866025 0.5 -0.866025 0.5 1564.83 1027.92)"
                        />
                    </clipPath>
                    <clipPath id="clip6_58_529">
                        <rect
                            width="81.7915"
                            height="81.7915"
                            fill="white"
                            transform="matrix(0.866025 0.5 -0.866025 0.5 1973.83 1027.92)"
                        />
                    </clipPath>
                    <clipPath id="clip7_58_529">
                        <rect
                            width="81.7915"
                            height="81.7915"
                            fill="white"
                            transform="matrix(0.866025 0.5 -0.866025 0.5 2167.83 916.924)"
                        />
                    </clipPath>
                    <clipPath id="clip8_58_529">
                        <rect
                            width="81.7915"
                            height="81.7915"
                            fill="white"
                            transform="matrix(0.866025 0.5 -0.866025 0.5 1768.83 1147.92)"
                        />
                    </clipPath>
                </defs>
                <g />
            </motion.svg>
        </>
    );
};

export default CustomBadge;
