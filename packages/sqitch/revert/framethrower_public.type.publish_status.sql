-- Revert flipr:framethrower_public.type.project_status from pg

begin;

  drop type if exists framethrower_public.premium cascade;

commit;
