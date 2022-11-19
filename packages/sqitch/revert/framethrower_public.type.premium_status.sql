-- Revert flipr:framethrower_public.type.premium_status from pg

begin;

  drop type if exists framethrower_public.premium_status;

commit;
