import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const options = {};

const series = [{ name: 'Series 1', data: [44, 55, 41, 55, 41, 10, 33] }];

export default function Dashboard() {
  return (
    <Flex direction='column' h='100vh'>
      <Header />
      <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
        <Sidebar />

        <SimpleGrid
          flex='1'
          gap='4'
          minChildWidth='320px'
          alignItems='flex-start'>
          <Box p='8' bg='gray.800' borderRadius={8}>
            <Text fontSize='lg' mb='4'>
              Inscritos da Semana
            </Text>
            <Chart
              options={options}
              series={series}
              type='area'
              height={160}
              width='100%'
            />
          </Box>
          <Box p='8' bg='gray.800' borderRadius={8}>
            <Text fontSize='lg' mb='4'>
              Taxa de abertura
            </Text>
            <Chart />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
