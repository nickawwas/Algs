import React, {lazy, Suspense} from "react";

import Box from "../components/Box/Box";

import { baseUrl } from "../components/Card/CardData";
import { ollAlgs, pllAlgs } from "../components/Card/regularData";
import Loading from "./Loading";

/* Lazy Load Pages */
const Card = lazy(() =>  import('../components/Card/Card'));
//import Card from "../components/Card/Card";

const Regular = () => {
  return (
    <Suspense fallback={<Loading/>}>
        <Box title="F2L">
            IN PROGRESS
        </Box>

        <Box title="OLL">
            <Card algos={ollAlgs} baseUrl={baseUrl} />{" "}
        </Box>

        <Box title="PLL">
            <Card algos={pllAlgs} baseUrl={baseUrl} />{" "}
        </Box>
    </Suspense>
  );
};

export default Regular;
