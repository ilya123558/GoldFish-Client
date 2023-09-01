import { NextPage } from 'next';
import React from 'react';
import { IMeta } from './meta.interface';
import Head from 'next/head';

export const Meta: NextPage<IMeta> = ({title, description}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name={title} content={description}  />
    </Head>
  );
};
