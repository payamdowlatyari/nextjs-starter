import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Text, LinkBox, LinkOverlay } from '@chakra-ui/react';

const Certificates = () => {
  return (
    <LinkBox as="article" p={2} borderWidth="1px" rounded="md">
      <LinkOverlay
        href="https://success.simplilearn.com/a8ed0cbb-aa08-40b3-b6ce-a5eac2e55dd4#gs.1kwd89"
        isExternal
      >
        <b>Full-Stack Web Development, </b> <i>Caltech </i> <ExternalLinkIcon />
      </LinkOverlay>
      <Text fontSize="sm" pb={2}>
        <b>Capstone:</b> A bank portal application with Angular2+, Java, Spring,
        MySQL, REST API, and CRUD functionality
      </Text>
    </LinkBox>
  );
};

export default Certificates;
