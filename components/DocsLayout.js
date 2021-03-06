import React from 'react'
import Head from './SeoHead'
import Navbar from './Navbar'
import { Container, Content, Title } from './Layout'
import GaWrapper from './GaWrapper'

const DocsLayout = ({ children, title="", description="" }) => (
  <Container>

    <Head
      title={`styled-components${title ? `: ${title}` : ''}`}
      description={description}>
        <meta name="robots" content="noodp" />
    </Head>

    <Navbar />

    <Content>
      <Title>
        {title}
      </Title>

      {children}
    </Content>
  </Container>
)

export default GaWrapper(DocsLayout)
