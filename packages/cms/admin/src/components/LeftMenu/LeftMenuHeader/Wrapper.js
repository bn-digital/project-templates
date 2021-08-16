import styled from 'styled-components'
import PropTypes from 'prop-types'
import Logo from 'strapi-admin/admin/src/assets/images/logo-strapi.png'

const Wrapper = styled.div`
  background-color: ${props => props.theme.main.colors.leftMenu.background};
  padding-left: 2rem;
  height: ${props => props.theme.main.sizes.leftMenu.height};

  .leftMenuHeaderLink {
    &:hover {
      text-decoration: none;
    }
  }

  .projectName {
    display: block;
    width: 100%;
    height: ${props => props.theme.main.sizes.leftMenu.height};
    color: $white;
    background-color: ${props => props.theme.main.colors.leftMenu.background};
    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-position: left center;
    background-size: auto 3rem;
  }
`

Wrapper.defaultProps = {
  theme: {
    main: {
      colors: {
        leftMenu: {},
      },
      sizes: {
        header: {},
        leftMenu: {},
      },
    },
  },
}

Wrapper.propTypes = {
  theme: PropTypes.object,
}

export default Wrapper
