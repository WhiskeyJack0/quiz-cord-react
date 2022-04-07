import React, { useState } from 'react';

import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    useColorModeValue,
    Icon,
    IconProps,
  } from '@chakra-ui/react';
  

  export default function Splash({setShowDrawer}) {
    
    return (
      <>
        
        <Container maxW={'5xl'} centerContent>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            color={useColorModeValue('gray.600', 'white')}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Quizzing online{' '}<br/>
            <Text as={'span'} color={'blue.400'}>
              made easy
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
            No more screen sharing shenanigans. Create a quiz, share the link 
            and get started.
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button
              rounded={'full'}
              color='white'
              px={6}
              colorScheme={'blue'}
              bg={'blue.400'}
              _hover={{ bg: 'blue.500' }}
              onClick={()=>setShowDrawer(true)}>
              Create Quiz
            </Button>
            <Button 
              color={useColorModeValue('gray.600', 'white')}
              rounded={'full'} px={6}>
              Learn more
            </Button>
          </Stack>
          <Flex w={'full'}>
          <Illustration
            height={{ sm: '24rem', lg: '28rem' }}
            
          />
          </Flex>
        </Stack>
      </Container>
      </>
    );
  }


  export const Illustration = (props) =>{ return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="865.76"
      height="682.89"
      data-name="Layer 1"
      viewBox="0 0 865.76 682.89"
      {...props}
    >
      <rect
        width="615.29"
        height="378.43"
        x="140.38"
        y="88.43"
        fill="#2f2e41"
        data-secondary="true"
        rx="7.81"
      ></rect>
      <path fill="#e4e4e4" d="M151.36 99.41H364.41V277.95H151.36z"></path>
      <path
        fill="#fff"
        d="M151.41 277.95H364.46000000000004V456.49H151.41z"
      ></path>
      <path
        fill="#2f2e41"
        d="M285.34 138.66s18.86 11.91 17.66 30.19 24.56 28.19 9.1 53.32-44.25 11.59-49.42-2.48 22.66-81.03 22.66-81.03z"
        data-secondary="true"
      ></path>
      <path
        fill="#429ae1"
        d="M170.72 277.31s11.11-66.88 86.8-66.88 91.7 67.22 91.7 67.22z"
        data-primary="true"
      ></path>
      <circle cx="172.84" cy="433.13" r="15.9" fill="#d1d3d4"></circle>
      <path fill="#e6e7e8" d="M164.07 428.02H178.53V439.76H164.07z"></path>
      <path
        d="M266 246.06a21.92 21.92 0 003.19-.24c5.92-.88 10.33-3.51 13.09-7.82 5.56-8.69 2.82-21.34 2-24.42l-1-.26c.44 1.62 3.88 15.32-1.79 24.18-2.61 4.08-6.8 6.57-12.45 7.41-22.36 3.31-33.5-30.8-33.61-31.14a.46.46 0 00-.58-.3.47.47 0 00-.3.58c.07.34 10.45 32.01 31.45 32.01zM221.44 277.29c.63-26.18-14.34-43.38-20.4-49.24-.25.19-.5.37-.74.57 5.9 5.67 20.85 22.68 20.22 48.67zM332.09 277.25c1.44-27.1-14.5-45.51-23.56-53.69q-2.07-1.25-4.28-2.41c7.1 5.56 28.6 25.07 26.91 56.1z"
        opacity="0.2"
      ></path>
      <path
        fill="#e6e7e8"
        d="M172.7 433.89L182.8 439.72 182.8 428.06 172.7 433.89z"
      ></path>
      <path
        fill="#fff"
        d="M158.33 447.19a.46.46 0 01-.33-.13.47.47 0 010-.66l27.2-27.2a.47.47 0 11.66.66l-27.2 27.2a.46.46 0 01-.33.13z"
      ></path>
      <path
        fill="#f9b499"
        d="M243.82 214.78l1.07-31.6h31.26s8 38.16-2.59 47.1-23.3-4.11-29.74-15.5z"
      ></path>
      <path fill="#fff" d="M577.46 135.79H744.7V455.89H577.46z"></path>
      <path fill="#fff" d="M577.46 99.41H744.7V135.8H577.46z"></path>
      <path
        fill="#fff6eb"
        d="M584.93 418.23H704.1099999999999V449.5H584.93z"
      ></path>
      <path
        fill="#2f2e41"
        d="M703.78 418.23H737.7099999999999V449.5H703.78z"
        data-secondary="true"
      ></path>
      <path fill="#fff" d="M364.41 99.41H577.46V277.95H364.41z"></path>
      <path
        fill="#fff"
        d="M364.87 99.41H469.46000000000004V280.40999999999997H364.87z"
      ></path>
      <path
        fill="#e4e4e4"
        d="M577 278.38h-62.85V251A62.85 62.85 0 01577 188.17z"
      ></path>
      <path
        fill="#ffdcd1"
        d="M562.47 280.64s-14.36-74-90.06-74-91.3 71.75-91.3 71.75z"
      ></path>
      <path
        fill="#429ae1"
        d="M562.47 280.64s-14.36-74-90.06-74-91.3 71.75-91.3 71.75z"
        data-primary="true"
      ></path>
      <path
        fill="#f9b499"
        d="M489 208.05l-1.07-31.59h-31.26s-8 38.16 2.59 47.09 23.3-4.1 29.74-15.5z"
      ></path>
      <path
        d="M461.62 241.63a20.86 20.86 0 003.14.12c18.4-.69 29.22-25.55 31.82-32.3l-.9-.22c-2.76 7.14-14.37 33.65-34 31.49-5.5-.61-9.56-2.87-12.07-6.73-5.4-8.3-2.14-21.66-1.31-24.66l-1 .25c-1 3.86-3.85 16.58 1.57 24.91 2.67 4.1 6.96 6.51 12.75 7.14zM529.42 225.84l-.71-.58c-6 7.8-20.38 29.07-20.17 54.71h.92c-.21-25.34 13.98-46.4 19.96-54.13zM424.8 218.65c-1 .61-2.07 1.23-3.07 1.86-9 9.65-25.35 31.08-24.54 58.07h.92c-.89-29.32 18.83-52.06 26.69-59.93z"
        opacity="0.2"
      ></path>
      <path fill="#e4e4e4" d="M364.41 277.95H577.46V456.49H364.41z"></path>
      <path
        fill="#2f2e41"
        d="M577.46 456.36a.47.47 0 01-.46-.46V99.41a.46.46 0 01.46-.46.45.45 0 01.46.46V455.9a.46.46 0 01-.46.46zM364.41 430.25a.46.46 0 01-.46-.46V99.41a.45.45 0 01.46-.46.46.46 0 01.46.46v330.38a.47.47 0 01-.46.46z"
        data-secondary="true"
      ></path>
      <path
        fill="#2f2e41"
        d="M577.46 278.41h-426.1a.46.46 0 01-.46-.46.45.45 0 01.46-.46h426.1a.45.45 0 01.46.46.46.46 0 01-.46.46zM744.7 136.25H577.46a.46.46 0 01-.46-.46.47.47 0 01.46-.46H744.7a.47.47 0 01.47.46.46.46 0 01-.47.46z"
        data-secondary="true"
      ></path>
      <path
        fill="#d1d3d4"
        d="M132.04 654.36H749.8199999999999V659.19H132.04z"
      ></path>
      <path
        fill="#e6e7e8"
        d="M749.82 654.36L132.04 654.36 204.43 493.11 699.05 493.11 749.82 654.36z"
      ></path>
      <path
        fill="#112633"
        d="M494 589.9c-2.09 12.82-5.69 22.68-9 22.14s-5-11.26-2.92-24.08 7.07-22.43 10.35-21.89 3.69 11.01 1.57 23.83z"
      ></path>
      <path
        fill="#f9b499"
        d="M472.17 605.59l17.29 4.66 12.06 3c4.93.72 9.85-31 8.12-31.33-12.48-2.59-27.93-7.46-27.93-7.46z"
      ></path>
      <path
        fill="#fff"
        d="M547 598.36c-3.46-15-19.56-13.44-32.43-15.51-1.56-.25-3.23-.57-5-.93-5.72 3.56-11.64 22.88-8.12 31.33 4.93.73 8.12 5.42 8.12 10.56 0 12.29-17 37.42-.3 39s41.22-49.46 37.73-64.45z"
      ></path>
      <path
        fill="#429ae1"
        d="M532.55 585.3a18.52 18.52 0 00-2.17 5 19 19 0 0013.21 23.34 16.35 16.35 0 001.65.38c1.86-6.44 2.62-12 1.79-15.61-1.9-8.27-7.6-11.51-14.48-13.11zM503.09 647.83c-2 7.78-1.92 14.18 6.25 14.93 5.17.47 11.1-4.11 16.71-11.09-9.85-7.43-17.73-6.37-22.96-3.84zM508.39 618.44A65.42 65.42 0 01521 583.65l-1.32-.14a66.9 66.9 0 00-12.35 33.26 10.66 10.66 0 011.06 1.67z"
        data-primary="true"
      ></path>
      <path
        fill="#2f2e41"
        d="M638.82 540.27C638.44 480.68 546 477 546 477s-154.17-3.22-214.77 4.29c0 0-110.5 11.26-105.29 67.12 3.29 35.22 105.22 51.22 180.12 58.24a15.07 15.07 0 01-1.87 7s17.47-1 42.87-3.72c22.63 1.46 37.51 1.9 37.51 1.9-.91-1.39-1.1-3.64-.74-6.41 68.09-9.55 155.17-28.85 154.99-65.15zm-111.26 2.54l-81.95 11.82-114.43-12.27z"
        data-secondary="true"
      ></path>
      <path
        d="M428.72 586.53a.46.46 0 010-.92c1.52-.07 151.84-6.89 178.65-40.22 3.35-4.16 4.64-8.62 3.83-13.25-4.43-25.3-118.92-35.7-223.08-29.55-81.2 4.8-132.21 18-133.12 34.47-.33 5.94 1.83 11.34 6.41 16.06 10.86 11.19 36 19.06 72.69 22.76a478.92 478.92 0 0052.9 2.22.49.49 0 01.48.45.46.46 0 01-.45.47 477.92 477.92 0 01-53-2.22c-37.45-3.77-62.1-11.52-73.27-23-4.77-4.91-7-10.55-6.67-16.75.5-9.09 14.21-16.94 40.74-23.32 23.46-5.65 55.7-9.8 93.25-12 50.78-3 105.89-2 147.41 2.76 60.56 6.9 75.09 18.79 76.63 27.55.85 4.91-.5 9.61-4 14-11.38 14.15-45 25.27-100 33.07-40.89 5.79-78.94 7.47-79.32 7.49z"
        opacity="0.2"
      ></path>
      <path
        fill="#429ae1"
        d="M261.4 397.57c-10.25 1.66-19.06 1.78-19.43-.45s7.86-6 18.11-7.66 19.49-3.43 19.86-1.2c-.07 4.21-8.3 7.64-18.54 9.31z"
        data-primary="true"
      ></path>
      <path
        d="M261.4 397.57c-10.25 1.66-19.06 1.78-19.43-.45s7.86-6 18.11-7.66 19.49-3.43 19.86-1.2c-.07 4.21-8.3 7.64-18.54 9.31z"
        opacity="0.2"
      ></path>
      <path
        fill="#f9b499"
        d="M277.93 402.86s-3.34-26.36 11.7-43.48c5.16-7.34 11.3-2.66 10.27-8.25S287 348 284.4 349s-8.28 5.34-8.28 5.34L265 335.85s-8.26-15.71-12.66-18.12 1 15.1 1 15.1l4.73 9.12s-19.57-18.32-28.3-17.32c-2.55.48-1.64 2.44-1.64 2.44s-3.87-2.31-4.92.91 17 23.06 17 23.06-19.76-11.57-22.17-8 34.28 33.33 34.28 33.33l.86 36.21z"
      ></path>
      <path
        fill="#429ae1"
        d="M331.09 481.38l7.05-29.65s-37.62 55-83.44 38.21-12.7-93.36-12.7-93.36c2.06 4.78 38.78-2.51 37.89-8.56l5.38 41.45s44.73-56.72 96.09-72.37 100.58-11.92 127.41 3.36c72 39.35 112.33 102.12 107.93 131.13s-80.49 41.81-80.49 41.81l-21.8-22.91 29-36.19z"
        data-primary="true"
      ></path>
      <path
        fill="#f1f2f2"
        d="M554.63 391.79L542.38 404l-17.11-17.11L508.16 404l-17.11-17.11L473.94 404l-17.11-17.11-17.36 17.32-17.32-17.32L405 404l-17.11-17.11L370.82 404l-17.11-17.11L336.6 404l-13.14-13.1c-6.78 5.68-12.88 11.37-18.11 16.56l14.14 14.14 17.11-17.11 17.11 17.11 17.11-17.11 17.11 17.11L405 404.49l17.11 17.11 17.32-17.31 17.36 17.31 17.11-17.11 17.11 17.11 17.11-17.11 17.11 17.11 17.11-17.11 17.11 17.11 13.16-13.15c-5.49-5.63-11.5-11.21-17.98-16.66z"
        opacity="0.2"
      ></path>
      <path
        fill="#f9b499"
        d="M425.97 334.03L425.97 317.4 469.97 319.26 469.45 337.53 448.32 356.9 425.97 334.03z"
      ></path>
      <path
        fill="#f1f2f2"
        d="M426.84 372.76L447.97 361.7 467.57 372.7 451.5 356.9 448.69 354.22 426.84 372.76z"
        opacity="0.2"
      ></path>
      <path
        fill="#429ae1"
        d="M407.85 350.59L426.59 372.56 448.69 354.22 467.96 372.47 489.53 352.55 469.45 337.53 448.69 354.22 425.97 334.03 407.85 350.59z"
        data-primary="true"
      ></path>
      <path
        d="M407.85 350.59L426.59 372.56 448.69 354.22 467.96 372.47 489.53 352.55 469.45 337.53 448.69 354.22 425.97 334.03 407.85 350.59z"
        opacity="0.2"
      ></path>
      <path
        fill="#112633"
        d="M405.5 584.92c4.81 14 5.94 26 1.37 27.6s-13.08-7.93-17.87-21.92-4-26.67.56-28.24 11.13 8.57 15.94 22.56z"
      ></path>
      <path
        fill="#f9b499"
        d="M418.83 605.21c-.56 1-13.76 8.2-13.76 8.2s-22.13 3.58-28.15 8.34-6.3-34.64 2.71-35.85c10.8-1.45 22.69-9.24 29.57-12.91 12.61-6.73 9.63 32.22 9.63 32.22z"
      ></path>
      <path
        d="M271.3 404.44a3.27 3.27 0 01-1.7-3.66 3.55 3.55 0 011.29-2.13 2.78 2.78 0 014.19.82 3.54 3.54 0 01.39 2.46 3.18 3.18 0 01-3.58 2.7 2.91 2.91 0 01-.59-.19zm2.09-5.33a1.61 1.61 0 00-.39-.11 1.9 1.9 0 00-1.55.39 2.63 2.63 0 00-.95 1.58 2.1 2.1 0 104.07.79 2.62 2.62 0 00-.29-1.81 2 2 0 00-.89-.84z"
        opacity="0.2"
      ></path>
      <path
        fill="#2f2e41"
        d="M395 561.92l-5 .33c13.69 1.71 22.17 46.24 13.93 51.4l24.9-2-4.54-52.65zM444.84 555.11l-148.32-15.93a.48.48 0 01-.41-.51.47.47 0 01.51-.41l148.27 15.93a.46.46 0 01-.05.92z"
        data-secondary="true"
      ></path>
      <path
        fill="#2f2e41"
        d="M389.84 562.28a.61.61 0 01.18-.09l168.53-24.34a.46.46 0 01.13.91L392 562.83a7.08 7.08 0 00-2.16-.55z"
        data-secondary="true"
      ></path>
      <path
        fill="#fff"
        d="M379.63 585.9c-12.64 1.93-24.07-2.79-33.83 1.74-21.45 10-2.31 79 21 79.62s4.1-40.74 10.13-45.51a26.83 26.83 0 017.6-3.53c6.57-8.82-1.83-31.05-4.9-32.32z"
      ></path>
      <path
        fill="#429ae1"
        d="M345.8 587.64c-5.86 2.72-8.68 9.85-9.23 18.79a18.47 18.47 0 002.59.18 19 19 0 0019-19 19.38 19.38 0 00-.11-2c-4.34-.1-8.42.26-12.25 2.03zM348.54 652.68c5.15 8.5 11.53 14.39 18.25 14.58 9.44.26 11.9-6.37 11.9-14.68-5.62-3.58-16.28-7.68-30.15.1zM371 586.37h-1.41c6.88 10.43 7.4 23.36 7.15 35.61l.19-.18a10.39 10.39 0 011-.67c.16-11.99-.48-24.52-6.93-34.76z"
        data-primary="true"
      ></path>
      <path
        fill="#fff"
        d="M721.25 437.57L726.21 439.67 726.14 428.09 713.24 433.81 717.74 436.11 718.75 440.69 721.25 437.57z"
      ></path>
      <path
        fill="#fff6eb"
        d="M717.74 436.11L724.69 429.79 719.7 436.95 718.75 440.69 717.74 436.11z"
      ></path>
      <path
        fill="#d1d3d4"
        d="M533.22 567.18h-183a5.85 5.85 0 01-5.82-5.26l-11.79-116a5.85 5.85 0 015.82-6.43h203.45a5.84 5.84 0 015.83 6.28l-8.66 116a5.85 5.85 0 01-5.83 5.41z"
      ></path>
      <path
        fill="#bcbec0"
        d="M332.77 447.84a5.84 5.84 0 015.62-4.26h203.49a5.86 5.86 0 015.67 4.4l.16-2.24a5.84 5.84 0 00-5.83-6.28H338.39a5.85 5.85 0 00-5.82 6.43z"
      ></path>
      <path
        fill="#fff"
        d="M447.35 506.11a10.76 10.76 0 11-10.76-10.76 10.77 10.77 0 0110.76 10.76z"
      ></path>
      <path fill="#3f3d56" d="M584.16 144.1H650.47V153.47H584.16z"></path>
      <path
        fill="#2f2e41"
        d="M660.12 144.1H738.52V153.47H660.12z"
        data-secondary="true"
      ></path>
      <path
        fill="#3f3d56"
        d="M584.16 165.48H630.3299999999999V174.85H584.16z"
      ></path>
      <path
        fill="#3f3d56"
        d="M584.16 204.25H630.3299999999999V213.62H584.16z"
      ></path>
      <path
        fill="#2f2e41"
        d="M641.33 165.48H695.9200000000001V174.85H641.33z"
        data-secondary="true"
      ></path>
      <path
        fill="#2f2e41"
        d="M702.19 165.48H738.5200000000001V174.85H702.19z"
        data-secondary="true"
      ></path>
      <path
        fill="#2f2e41"
        d="M584.16 181.59H652.3V190.96H584.16z"
        data-secondary="true"
      ></path>
      <circle cx="667.69" cy="185.42" r="6.38" fill="#d1d3d4"></circle>
      <path
        fill="#fff"
        d="M665.14 185.42s-3.43-2.21-2.65-2.94 1.79.85 1.79.85-.43-2.14.8-2.05.06 4.14.06 4.14zM670.1 185.25s-1.46-3.8-.4-3.93 1 1.89 1 1.89.81-2.12 1.75-1.33-2.35 3.37-2.35 3.37zM668.91 186.21a1.28 1.28 0 11-2.55 0c0-.7.57-.58 1.28-.58s1.27-.12 1.27.58z"
      ></path>
      <path
        fill="#d1d3d4"
        d="M653 208a6.38 6.38 0 11-6.38-6.38A6.38 6.38 0 01653 208z"
      ></path>
      <path
        fill="#fff"
        d="M644.07 208.05s-3.43-2.21-2.65-2.94 1.79.85 1.79.85-.43-2.14.8-2.06.06 4.15.06 4.15zM649 207.88s-1.46-3.81-.4-3.93 1 1.89 1 1.89.81-2.13 1.75-1.34-2.35 3.38-2.35 3.38zM647.84 208.84a1.28 1.28 0 11-2.55 0c0-.7.57-.59 1.28-.59s1.27-.11 1.27.59z"
      ></path>
      <circle cx="664.7" cy="208.04" r="6.38" fill="#d1d3d4"></circle>
      <path
        fill="#fff"
        d="M662.15 208.05s-3.43-2.21-2.65-2.94 1.79.85 1.79.85-.42-2.14.8-2.06.06 4.15.06 4.15zM667.11 207.88s-1.46-3.81-.4-3.93 1.06 1.89 1.06 1.89.8-2.13 1.74-1.34-2.4 3.38-2.4 3.38zM665.93 208.84a1.28 1.28 0 11-2.55 0c0-.7.57-.59 1.27-.59s1.28-.11 1.28.59z"
      ></path>
      <circle cx="683.6" cy="208.04" r="6.38" fill="#d1d3d4"></circle>
      <path
        fill="#fff"
        d="M681.05 208.05s-3.43-2.21-2.65-2.94 1.79.85 1.79.85-.43-2.14.8-2.06.06 4.15.06 4.15zM686 207.88s-1.46-3.81-.4-3.93 1 1.89 1 1.89.81-2.13 1.75-1.34-2.35 3.38-2.35 3.38zM684.83 208.84a1.28 1.28 0 01-2.56 0c0-.7.57-.59 1.28-.59s1.28-.11 1.28.59z"
      ></path>
      <path
        fill="#f9b499"
        d="M313.44 246.31s14.77-32.82 18.41-32.75-3.45 22.23-3.45 22.23 14.83-27.32 18.78-26.57-9.45 27.72-9.45 27.72 14-21.19 15.18-18.8-8.73 26.91-8.73 26.91S355 231.92 357.67 234s-16.12 35.59-26.44 37.64-20.37-1.79-26.7-12.16c-2.87-4.7-1.57-8-.8-14.05.92-7.3-2.26-14 .17-14.7s7.24 4.3 7.61 8.22a26 26 0 001.93 7.36z"
      ></path>
      <path
        fill="#d1d3d4"
        d="M605.38 117.54A10.34 10.34 0 11595 107.21a10.34 10.34 0 0110.38 10.33z"
      ></path>
      <path fill="#e6e7e8" d="M589.34 114.22H598.74V121.85H589.34z"></path>
      <path
        fill="#e6e7e8"
        d="M594.95 118.04L601.52 121.83 601.52 114.25 594.95 118.04z"
      ></path>
      <path
        fill="#d1d3d4"
        d="M632.62 117.54a10.34 10.34 0 11-10.33-10.33 10.33 10.33 0 0110.33 10.33z"
      ></path>
      <path
        fill="#e6e7e8"
        d="M622.29 122.32a2.9 2.9 0 01-2.9-2.9v-5a2.9 2.9 0 012.9-2.9 2.9 2.9 0 012.9 2.9v5a2.9 2.9 0 01-2.9 2.9z"
      ></path>
      <path
        fill="#e6e7e8"
        d="M622.36 124.26a4.75 4.75 0 01-3.68-1.48c-1.78-2-1.49-5.15-1.47-5.28a.46.46 0 01.91.09s-.26 2.92 1.24 4.58a3.87 3.87 0 003 1.17 3.73 3.73 0 002.95-1.17c1.47-1.66 1.13-4.54 1.13-4.57a.46.46 0 01.4-.51.45.45 0 01.51.4c0 .13.39 3.32-1.35 5.29a4.62 4.62 0 01-3.64 1.48z"
      ></path>
      <path
        fill="#e6e7e8"
        d="M622.29 128.45a.45.45 0 01-.46-.46v-3.91a.46.46 0 01.46-.46.47.47 0 01.46.46V128a.46.46 0 01-.46.45z"
      ></path>
      <path fill="#fff6eb" d="M642.75 109.59H735.54V126.48H642.75z"></path>
      <path
        fill="#2f2e41"
        d="M584.93 396H737.41V409.24H584.93z"
        data-secondary="true"
      ></path>
      <path
        d="M282.37 407c-4.52 4.43-15.12 8.92-28.3 10.26-11.74 1.18-16.54-1-18.34-2.35l-.27 1c1.74 1.19 5.28 2.65 12.29 2.65a62.21 62.21 0 006.42-.35c12.08-1.22 23.13-5.3 28.35-10z"
        opacity="0.2"
      ></path>
      <path
        fill="#f4a48e"
        d="M426 329.22V317.4s11.83 21.15 39.22 14.49c-.03 0-19.58 11.33-39.22-2.67z"
      ></path>
      <path
        fill="#f9b499"
        d="M421.29 283.06s-9.31-8.79-12.78-1.53 7.72 20.86 13.77 18.19-.99-16.66-.99-16.66z"
      ></path>
      <path
        fill="#2f2e41"
        d="M419.46 282.69s-11.41-10.61-8.81-29.57 18.48-12.83 18.48-12.83 5.65-14.38 19.56-13.51 24.83 15.05 35.65 17.08 17.91-2.61 17.91-2.61 0 31.18-24.89 42.8-57.9-1.36-57.9-1.36z"
        data-secondary="true"
      ></path>
      <path
        fill="#f9b499"
        d="M479.34 283.06s9.32-8.79 12.79-1.53-7.72 20.86-13.77 18.19.98-16.66.98-16.66z"
      ></path>
      <path
        fill="#f9b499"
        d="M465.19 331.89c8.47-3.93 12.13-14.54 12.7-24.3l1.45-24.53-3.87-15.06s-33.24 6.38-44.11-11.67c-1.09 13.18-5.24 20.17-11.9 26.41l1.62 15.72a75.76 75.76 0 003.78 17.29c2.11 6.09 4 9 9.32 13.29 0-.04 11.43 11.96 31.01 2.85z"
      ></path>
      <path
        fill="#2f2e41"
        d="M429.64 241.83c-1.83-8.31 8.07-14.16 15.09-14.68a18.77 18.77 0 0117.73 9.85c.35.65 1.34.07 1-.58a19.68 19.68 0 00-31.67-4.4c-2.55 2.72-4.07 6.34-3.25 10.09.16.73 1.27.42 1.11-.3zM421.8 239.34c-6.5 1.15-10.74 7.57-12.39 13.52A24.14 24.14 0 00413 273.1c.43.6 1.43 0 1-.58a23 23 0 01-3.57-19c1.48-5.72 5.44-12 11.69-13.1.73-.13.42-1.24-.31-1.11z"
        data-secondary="true"
      ></path>
      <path
        fill="#f4a48e"
        d="M488.78 201.49l-.6-9s-9.64 15.56-31.92 18.53c0 .03 19.92 5.32 32.52-9.53z"
      ></path>
      <path
        fill="#f9b499"
        d="M441.42 167.75c1.63 23.57 2.27 44.85 19.78 43.64s37.56-16.78 30.82-45.93c-1.63-23.56-8.09-41.37-25.6-40.16s-26.63 18.89-25 42.45z"
      ></path>
      <path
        fill="#2f2e41"
        d="M490.66 162l-1.33 7.69s-1.39-17.24-2.43-19.64c-2.54-5.9-6.58-11.91-12.64-12.92-12.44-2.09-23.36 15.84-35.08 6s-11-23.16-3.2-25.18 12.11 2.36 26.2 3.35 24.26-6.22 34.38-1.76 5.24 19 5.24 19 8.06-4.12 13.36 8.64-15.76 29.44-15.76 29.44z"
        data-secondary="true"
      ></path>
      <path
        fill="#f9b499"
        d="M503.45 173.07c-1.18 6.24-6.23 10.53-11.29 9.57s-8.19-6.79-7-13 6.24-10.52 11.29-9.57 8.18 6.76 7 13z"
      ></path>
      <path
        fill="#f4a48e"
        d="M246.26 210.43a50.34 50.34 0 00.17-9.49s9.45 15.32 32.38 14.93c0 0-14.48 3.25-32.55-5.44z"
      ></path>
      <path
        fill="#f9b499"
        d="M291.49 171.42c0 23.62.81 44.89-16.74 44.89s-42.9-19.14-42.9-42.76 14.22-42.76 31.77-42.76 27.87 17.02 27.87 40.63z"
      ></path>
      <path
        fill="#2f2e41"
        d="M246.69 145.91s9.65 6.65 29.71 5.06 25.42-20.46 22.44-24.23-13.84 4.57-25 0-28.24-8.34-41 6-7.94 25.22-6.36 36.74-33.16 20.26-32.77 43.3 30.29 26.44 39.79 18.83 15.76-14 11.87-40.88 1.32-44.82 1.32-44.82z"
        data-secondary="true"
      ></path>
    </Icon>
  );
}