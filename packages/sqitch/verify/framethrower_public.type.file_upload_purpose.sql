-- Verify flipr:framethrower_public.type.file_upload_purpose on pg

begin;

  select 1/count(*) from pg_type where typname = 'file_upload_purpose';

rollback;

