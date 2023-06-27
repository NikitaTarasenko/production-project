import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input/Input';
import { Button } from '@/shared/ui/Button/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDIspatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import cls from './AddCommentForm.module.scss';
import { getAddCommentFormError, getAddCommentFormText } from '../model/selectors/addCommentFormSelectors';
import { addCommentFormActions, addCommentFormReducer } from '../model/slices/addCommentFormSlice';

interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string)=> void;
}
const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};
const AddCommentForm = memo((props : AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentChange = useCallback((text:string) => {
        dispatch(addCommentFormActions.setText(text));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentChange('');
    }, [onCommentChange, onSendComment, text]);
    return (
        <DynamicModuleLoader reducers={reducers}>
            {error && <Text theme={TextTheme.ERROR} text={error} />}
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    placeholder={t('Write your comment')}
                    value={text}
                    onChange={onCommentChange}
                />
                <Button onClick={onSendHandler}>{t('Send')}</Button>
            </div>

        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
