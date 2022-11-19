begin;
select plan(2);
select has_function(
    'framethrower_public',
    'register_note',
    Array['text', 'text', 'text'],
    'register_note exists'
);
select function_returns('framethrower_public', 'register_note', 'framethrower_public.note', 'register_note returns framethrower_public.profile');

select * from finish();
rollback;