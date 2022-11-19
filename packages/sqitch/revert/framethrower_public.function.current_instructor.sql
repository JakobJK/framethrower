-- Revert flipr:framethrower_public.function.current_instructor from pg

begin;

  drop function if exists framethrower_public.current_instructor();

commit;
