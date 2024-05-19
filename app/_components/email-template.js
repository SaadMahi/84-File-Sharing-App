import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
  Link,
} from '@react-email/components';

export const EmailTemplate = ({ response }) => (
  <Html>
    <Head />
    <Preview>File-share</Preview>
    <Body style={main}>
      <Container>
        <Section style={content}>
          <Row>
            <Img
              style={image}
              src="https://firebasestorage.googleapis.com/v0/b/file-sharing-nextjs.appspot.com/o/project-images%2Fmail-template-header.jpg?alt=media&token=880b7d16-14aa-4d3a-b72f-2ead351b6af4"
            />
          </Row>

          <Row style={{ ...boxInfos, paddingBottom: '0' }}>
            <Column>
              <Heading
                style={{
                  fontSize: 32,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}
              >
                Hi {response?.emailToSend?.split('@')[0]},
              </Heading>
              <Heading
                as="h2"
                style={{
                  fontSize: 26,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}
              >
                {response?.userName} sent you a file
              </Heading>

              <Text style={paragraph}>File name: {response?.fileName}</Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                File size: {response?.fileSize}
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                File type: {response?.fileType}
              </Text>
              <Text
                style={{
                  color: 'rgb(0,0,0, 0.5)',
                  fontSize: 14,
                  marginTop: -5,
                }}
              >
                *Access and download file at your own risk
              </Text>

              <Text style={paragraph}>
                Now you can also share file with File-Share App
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                Click below button to Access your file
              </Text>
            </Column>
          </Row>
          <Row style={{ ...boxInfos, paddingTop: '0' }}>
            <Column style={containerButton} colSpan={2}>
              <Button href={response?.shortUrl} style={button}>
                Click here to Download
              </Button>
            </Column>
          </Row>
        </Section>

        <Text
          style={{
            textAlign: 'center',
            fontSize: 12,
            color: 'rgb(0,0,0, 0.7)',
          }}
        >
          © 2024 | File-Share Inc., 350 Mission Street, San Francisco, CA
          94105, U.S.A. | www.file-share.com
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#fff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const containerButton = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
};

const button = {
  backgroundColor: '#e00707',
  borderRadius: 3,
  color: '#FFF',
  fontWeight: 'bold',
  border: '1px solid rgb(0,0,0, 0.1)',
  cursor: 'pointer',
  padding: '12px 30px',
};

const content = {
  border: '1px solid rgb(0,0,0, 0.1)',
  borderRadius: '3px',
};

const image = {
  width: '100%',

  margin: 'auto',
};

const boxInfos = {
  padding: '20px',
};
