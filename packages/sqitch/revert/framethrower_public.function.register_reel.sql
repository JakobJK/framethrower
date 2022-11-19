-- Revert flipr:framethrower_public.function.register_reel from pg

begin;

  drop function if exists framethrower_public.register_reel(text, text);

commit;
