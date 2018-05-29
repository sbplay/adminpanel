<?php
declare(strict_types = 1);

namespace TYPO3\CMS\Adminpanel\Modules;

/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */

use TYPO3\CMS\Core\TimeTracker\TimeTracker;
use TYPO3\CMS\Core\Utility\GeneralUtility;

/**
 * Admin Panel TypoScript Debug Module
 */
class TsDebugModule extends AbstractModule
{
    /**
     * @inheritdoc
     */
    public function getIdentifier(): string
    {
        return 'tsdebug';
    }

    /**
     * @inheritdoc
     */
    public function getIconIdentifier(): string
    {
        return 'mimetypes-x-content-template-static';
    }

    /**
     * @inheritdoc
     */
    public function getLabel(): string
    {
        return $this->getLanguageService()->sL(
            'LLL:EXT:adminpanel/Resources/Private/Language/locallang_tsdebug.xlf:module.label'
        );
    }

    /**
     * @inheritdoc
     */
    public function getShortInfo(): string
    {
        $messageCount = 0;
        foreach ($this->getTimeTracker()->tsStackLog as $log) {
            $messageCount += count($log['message'] ?? []);
        }
        return sprintf($this->getLanguageService()->sL(
            'LLL:EXT:adminpanel/Resources/Private/Language/locallang_tsdebug.xlf:module.shortinfo'
        ), $messageCount);
    }

    /**
     * @return TimeTracker
     */
    protected function getTimeTracker(): TimeTracker
    {
        return GeneralUtility::makeInstance(TimeTracker::class);
    }

    /**
     * @return array
     */
    public function getJavaScriptFiles(): array
    {
        return ['EXT:adminpanel/Resources/Public/JavaScript/Modules/TsDebug.js'];
    }
}
