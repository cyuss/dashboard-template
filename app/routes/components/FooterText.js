import React from 'react';
import PropTypes from 'prop-types';

const FooterText = (props) => (
	<React.Fragment>
		© { props.year } All Rights Reserved. Built with { props.desc }. 
		Designed and implemented by {'Cyuss'}.
		<a
			href="http://www.webkom.co"
			target="_blank"
			rel="noopener noreferrer"
			className="sidebar__link"
		>
			www.webkom.co
		</a>
	</React.Fragment>
)
FooterText.propTypes = {
    year: PropTypes.node,
	name: PropTypes.node,
	desc: PropTypes.node,
};
FooterText.defaultProps = {
    year: "2020",
    name: "Admin Dashboard",
    desc: "React"
};

export { FooterText };
