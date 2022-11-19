-- Revert flipr:framethrower_public.function.register_tumbleweed from pg

begin;

  drop function if exists framethrower_public.register_tumbleweed();

commit;
