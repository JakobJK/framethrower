-- Revert framethrower:framethrower_public.function.request_profeedback from pg

begin;

  drop function if exists framethrower_public.request_profeedback(text);

commit;
