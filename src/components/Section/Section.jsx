import PropTypes from 'prop-types';
import {SectionTitle, Title} from './Section.styled'

const Section = ({ title, children }) => {
    return (
        <SectionTitle>
            <Title>{title}</Title>
            {children}
        </SectionTitle>
    )
}

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};