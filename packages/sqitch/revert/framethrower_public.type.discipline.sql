-- Revert flipr:framethrower_public.type.discipline from pg

begin;

  drop type if exists framethrower_public.discipline;

commit;
