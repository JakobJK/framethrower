begin;
select plan(2);
select has_function(
    'framethrower_public',
    'register_feedback_response',
    Array['text', 'text'],
    'register_feedback_response exists'
);
select function_returns('framethrower_public', 'register_feedback_response', 'framethrower_public.animation', 'register_feedback_response returns framethrower_public.animation');

select * from finish();
rollback;