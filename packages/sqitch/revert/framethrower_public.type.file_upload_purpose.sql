-- Revert flipr:framethrower_public.type.file_upload_purpose from pg

begin;

  drop type if exists framethrower_public.file_upload_purpose;

commit;
