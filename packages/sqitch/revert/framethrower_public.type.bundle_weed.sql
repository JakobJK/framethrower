-- Revert flipr:framethrower_public.type.tumbleweed from pg

begin;

  drop type if exists framethrower_public.bundle_weed;

commit;
