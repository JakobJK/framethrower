begin;
select plan(2);
select has_function(
    'framethrower_public',
    'register_note_comment',
    Array['text', 'text'],
    'register_note_comment exists'
);
select function_returns('framethrower_public', 'register_note_comment', 'framethrower_public.note_comment', 'register_note_comment returns framethrower_public.profile');

select * from finish();
rollback;