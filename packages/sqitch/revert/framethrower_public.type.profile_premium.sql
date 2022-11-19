-- revert flipr:framethrower_public.type.premium from pg

begin;

  drop type if exists framethrower_public.premium cascade;

commit;
