import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box } from "@quarkly/widgets";
const defaultProps = {
	"width": "500px",
	"height": "500px",
	"background": "#c03a3a"
};
const overrides = {};

const Redbox = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		{children}
	</Box>;
};

Object.assign(Redbox, { ...Box,
	defaultProps,
	overrides
});
export default Redbox;