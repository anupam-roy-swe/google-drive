import FileUploader from '@/components/FileUploader';
import Search from '@/components/Search';
import { Button } from '@/components/ui/button';
import { signOutUser } from '@/lib/actions/user.actions';
import Image from 'next/image';
import React from 'react';

const Header = ({
  userId,
  accountId,
}: {
  userId: string;
  accountId: string;
}) => {
  return (
    <header className='header'>
      <Search />
      <div className='header-wrapper'>
        <FileUploader />
        <form
          action={async () => {
            'use server';
            await signOutUser();
          }}
        >
          <Button
            type='submit'
            className='sign-out-button'
          >
            <Image
              src='/assets/icons/logout.svg'
              alt='logo'
              width={24}
              height={24}
              className='w-7'
            />
          </Button>
        </form>
      </div>
    </header>
  );
};

export default Header;
