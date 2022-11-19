-- Revert flipr:framethrower_public.function.create_company from pg

begin;

  drop function if exists framethrower_public.admin_create_company(text, text, text, text, text, boolean, json, uuid, uuid);

commit;
