
begin;
  select plan(1);
    select has_type('framethrower_public', 'file_upload_purpose', 'file_upload_purpose type exists on framethrower_public' );
  select * from finish();
rollback;
