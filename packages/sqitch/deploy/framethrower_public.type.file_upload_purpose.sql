-- Deploy flipr:framethrower_public.type.file_upload_purpose to pg

begin;
  create type framethrower_public.file_upload_purpose as enum ('submission', 'avatar', 'feedback', 'banner', 'pro_content');
commit;
